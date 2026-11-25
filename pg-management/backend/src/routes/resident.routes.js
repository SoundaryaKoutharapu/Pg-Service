
import express from "express";

import { createResident } from "../controllers/resident.controller.js";
import { residentRegistrationSchema } from "../validators/resident.validator.js";
import validate from "../middlewares/validate.middleware.js";

const router = express.Router();

router.post(
  "/",
  validate(residentRegistrationSchema),
  createResident
);

export default router;
