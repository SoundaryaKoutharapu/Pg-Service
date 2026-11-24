import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

const app = express();

dotenv.config();

// Security headers
app.use(helmet());

// Cross-origin configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

// Parse incoming JSON requests
app.use(express.json({ limit: "10kb" }));

// Parse URL-encoded data
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Health check route
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PG Management API is running",
    timestamp: new Date().toISOString(),
  });
});

export default app;
