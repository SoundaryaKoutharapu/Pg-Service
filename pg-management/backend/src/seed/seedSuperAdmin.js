
import "dotenv/config";
import mongoose from "mongoose";

import connectDB from "../config/db.js";
import { createAdmin } from "../services/admin.service.js";

const createSuperAdmin = async () => {
  try {
    const { SUPER_ADMIN_NAME, SUPER_ADMIN_EMAIL, SUPER_ADMIN_PASSWORD } =
      process.env;

    if (!SUPER_ADMIN_NAME || !SUPER_ADMIN_EMAIL || !SUPER_ADMIN_PASSWORD) {
      throw new Error(
        "Missing Super Admin credentials in environment variables"
      );
    }

    if (SUPER_ADMIN_PASSWORD.length < 12) {
      throw new Error(
        "Super Admin password must contain at least 12 characters"
      );
    }

    await connectDB();

    const admin = await createAdmin({
      fullName: SUPER_ADMIN_NAME,
      email: SUPER_ADMIN_EMAIL,
      password: SUPER_ADMIN_PASSWORD,
      role: "super_admin",
    });

    console.log("Super Admin created successfully!");
    console.log(`Email: ${admin.email}`);
    console.log(`Role: ${admin.role}`);
  } catch (error) {
    console.error("Super Admin setup failed:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

createSuperAdmin();
