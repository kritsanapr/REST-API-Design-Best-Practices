const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const v2Router = require("./v2/routes");

app.use(bodyParser.json());
app.use("/api/v1/workouts", v1WorkoutRouter);
// app.use("/api/v2", v2Router);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
