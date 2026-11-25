
import "dotenv/config";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Room from "../models/Room.js";

const seedRooms = async () => {
  try {
    await connectDB();

    const operations = [];

    for (let floor = 1; floor <= 5; floor++) {
      for (let room = 1; room <= 8; room++) {
        const roomNumber = `${floor}${String(room).padStart(2, "0")}`;

        const capacity = floor === 3 ? 3 : 2;
        const monthlyRent = capacity === 3 ? 7500 : 9000;

        operations.push({
          updateOne: {
            filter: { roomNumber },
            update: {
              $setOnInsert: {
                roomNumber,
                floor,
                capacity,
                monthlyRent,
                isActive: true,
              },
            },
            upsert: true,
          },
        });
      }
    }

    const result = await Room.bulkWrite(operations, {
      ordered: true,
    });

    console.log("Room seeding completed!");
    console.log(`New rooms created: ${result.upsertedCount}`);
    console.log(`Existing rooms matched: ${result.matchedCount}`);
    console.log("Expected rooms: 40");
    console.log("Expected beds: 72");
  } catch (error) {
    console.error("Room seeding failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seedRooms();
