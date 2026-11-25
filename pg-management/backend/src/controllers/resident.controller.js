import { registerResident } from "../services/resident.service.js";

export const createResident = async (req, res, next) => {
  try {
    const resident = await registerResident(req.body);

    return res.status(201).json({
      success: true,
      message: "Resident registered successfully",
      data: resident,
    });
  } catch (error) {
    next(error);
  }
};
