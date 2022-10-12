const {
  createWorkout,
  getAllWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutControllers");
const requireAuth = require("../middlware/requireAuth.js");
const express = require("express");

const router = express.Router();

router.use(requireAuth);

router.get("/", getAllWorkouts);

router.post("/", createWorkout);

router.get("/:id", getSingleWorkout);

router.delete("/:id", deleteWorkout);

router.patch("/:id", updateWorkout);

module.exports = router;
