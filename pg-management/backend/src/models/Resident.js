
import mongoose from "mongoose";

const residentSchema = new mongoose.Schema(
  {
    // Personal details
    fullName: {
      type: String,
      required: [true, "Resident name is required"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },

    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: null,
    },

    // Room allocation
    roomNumber: {
      type: String,
      required: [true, "Room number is required"],
      trim: true,
    },

    bedNumber: {
      type: Number,
      required: [true, "Bed number is required"],
      min: 1,
    },

    // Stay details
    checkInDate: {
      type: Date,
      required: true,
      default: Date.now,
    },

    checkOutDate: {
      type: Date,
      default: null,
    },

    monthlyRent: {
      type: Number,
      required: true,
      min: 0,
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

// Prevent two active residents from occupying the same bed.
residentSchema.index(
  { roomNumber: 1, bedNumber: 1 },
  {
    unique: true,
    partialFilterExpression: { isActive: true },
  }
);

// Prevent duplicate active resident phone numbers.
residentSchema.index(
  { phone: 1 },
  {
    unique: true,
    partialFilterExpression: { isActive: true },
  }
);

const Resident = mongoose.model("Resident", residentSchema);

export default Resident;
