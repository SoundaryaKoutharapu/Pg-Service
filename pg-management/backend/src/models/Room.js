
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    roomNumber: {
      type: String,
      required: [true, "Room number is required"],
      unique: true,
      trim: true,
    },

    floor: {
      type: Number,
      required: [true, "Floor number is required"],
      min: 1,
      max: 5,
    },

    capacity: {
      type: Number,
      required: [true, "Room capacity is required"],
      enum: [2, 3],
    },

    monthlyRent: {
      type: Number,
      required: true,
      enum: [7500, 9000],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("Room", roomSchema);

export default Room;
