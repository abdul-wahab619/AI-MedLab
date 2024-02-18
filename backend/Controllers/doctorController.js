import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const updateDoctor = await Doctor.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!updateDoctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updateDoctor,
    });
  } catch (error) {
    console.error("Error updating Doctor:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update doctor",
      error: error.message, // Include error message in the response
    });
  }
};

export const deleteDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    await Doctor.findById(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
      data: deleteDoctor,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

export const getSingleDoctor = async (req, res) => {
  const id = req.params.id;
  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password");
    res.status(200).json({
      success: true,
      message: "Doctor Found",
      data: doctor,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Failed to find Doctor",
    });
  }
};

export const getAllDoctors = async (req, res) => {
  const id = req.params.id;
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).select(
        "-password"
      );
    }

    res.status(200).json({
      success: true,
      message: "Doctors Found",
      data: doctors,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "No Doctors found",
    });
  }
};

export const getDoctorProfile = async (req, res) => {
  const doctorId = req.doctorId;
  // console.log("Doctor ID:", doctorId);

  try {
    const doctor = await Doctor.findById(doctorId);
    // console.log("Retrieved doctor profile:", doctor);

    if (!doctor) {
      return res
        .status(404)
        .json({ success: false, message: "Doctor not found" });
    }

    const { password, ...rest } = doctor._doc;
    const appointments = await Booking.find({ doctor: doctorId });

    res.status(200).json({
      success: true,
      message: "Profile info is getting",
      data: { ...rest, appointments },
    });
  } catch (error) {
    // console.error("Error fetching doctor profile:", error);
    res.status(500).json({
      success: false,
      message: "Someting went wrong, cannot get this",
      error: error.message,
    });
  }
};
