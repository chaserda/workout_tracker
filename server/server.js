require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const workoutRoutes = require("./routes/workouts");
const usersRoutes = require("./routes/users");

app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.json({ message: "yo" });
});

app.use("/api/workouts", workoutRoutes);
app.use("/api/users", usersRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`listening on ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
