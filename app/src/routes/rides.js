const express = require("express");
const { createRide, getRides } = require("../data/ridesStore");

const router = express.Router();

router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    count: getRides().length,
    data: getRides()
  });
});

router.post("/", (req, res) => {
  const { customerName, pickupLocation, dropLocation } = req.body;

  if (!customerName || !pickupLocation || !dropLocation) {
    return res.status(400).json({
      success: false,
      message: "customerName, pickupLocation, and dropLocation are required"
    });
  }

  const ride = {
    id: Date.now().toString(),
    customerName,
    pickupLocation,
    dropLocation,
    status: "BOOKED",
    createdAt: new Date().toISOString()
  };

  createRide(ride);

  return res.status(201).json({
    success: true,
    message: "Ride booked successfully",
    data: ride
  });
});

module.exports = router;