
import express from "express";
import cors from "cors";
import helmet from "helmet";

import residentRoutes from "./routes/resident.routes.js";
import errorHandler from "./middlewares/error.middleware.js";

const app = express();

// Security middleware
app.use(helmet());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5173",
    credentials: true,
  })
);

// Parse incoming request data
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

// Health check
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "PG Management API is running",
    timestamp: new Date().toISOString(),
  });
});

// API routes
app.use("/api/v1/residents", residentRoutes);

// Handle unknown routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.method} ${req.originalUrl}`,
  });
});

// Centralized error handler (must be last)
app.use(errorHandler);

export default app;
