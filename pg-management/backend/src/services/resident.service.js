
import mongoose from "mongoose";
import Room from "../models/Room.js";
import Resident from "../models/Resident.js";

export const registerResident = async (residentData) => {
  const session = await mongoose.startSession();

  try {
    let registeredResident;

    await session.withTransaction(async () => {
      const {
        fullName,
        phone,
        email,
        roomNumber,
        bedNumber,
        checkInDate,
      } = residentData;

      // 1. Find the selected active room.
      const room = await Room.findOne({
        roomNumber,
        isActive: true,
      }).session(session);

      if (!room) {
        throw new Error("Room not found or inactive");
      }

      // 2. Validate the selected bed.
      if (
        !Number.isInteger(bedNumber) ||
        bedNumber < 1 ||
        bedNumber > room.capacity
      ) {
        throw new Error("Invalid bed number for this room");
      }

      // 3. Check for an existing active resident with this phone.
      const existingResident = await Resident.findOne({
        phone,
        isActive: true,
      }).session(session);

      if (existingResident) {
        throw new Error("This phone number is already registered");
      }

      // 4. Check whether the selected bed is occupied.
      const occupiedBed = await Resident.findOne({
        roomNumber,
        bedNumber,
        isActive: true,
      }).session(session);

      if (occupiedBed) {
        throw new Error("This bed is already occupied");
      }

      // 5. Create resident with rent taken from the room.
      const [resident] = await Resident.create(
        [
          {
            fullName,
            phone,
            email,
            roomNumber: room.roomNumber,
            bedNumber,
            checkInDate,
            monthlyRent: room.monthlyRent,
          },
        ],
        { session }
      );

      registeredResident = resident;
    });

    return registeredResident;
  } catch (error) {
    if (error.code === 11000) {
      throw new Error(
        "This phone number or bed is already assigned"
      );
    }

    throw error;
  } finally {
    await session.endSession();
  }
};
