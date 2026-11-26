
import bcrypt from "bcryptjs";
import Admin from "../models/Admin.js";

export const createAdmin = async (adminData) => {
  const { fullName, email, password, role } = adminData;

  const normalizedEmail = email.trim().toLowerCase();

  // Check whether this email is already registered.
  const existingAdmin = await Admin.findOne({
    email: normalizedEmail,
  });

  if (existingAdmin) {
    const error = new Error("An admin with this email already exists");
    error.statusCode = 409;
    throw error;
  }

  // Hash the password before saving it.
  const hashedPassword = await bcrypt.hash(password, 12);

  const admin = await Admin.create({
    fullName,
    email: normalizedEmail,
    password: hashedPassword,
    role,
  });

  // Never return the password hash.
  return {
    id: admin._id,
    fullName: admin.fullName,
    email: admin.email,
    role: admin.role,
  };
};
