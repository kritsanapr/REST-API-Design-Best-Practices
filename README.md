# REST-API-Design-Best-Practices

### Table of Contents

- [x] Architecture
- [x] Basic Setup
- [x] REST API Best Practices
- [x] Versioning
- [x] Name resources in plural
- [x] Accept and respond with data in JSON format
- [x] Respond with standard HTTP Error Codes
- [x] Avoid verbs in endpoint names
- [ ] Group associated resources together
- [ ] Integrate filtering, sorting & pagination
- [ ] Use data caching for performance improvements
- [ ] Good security practices
- [ ] Document your API properly
- [ ] Conclusion

___

### Our Example Project

Before we start implementing the best practices into our example project, I'd like to give you a brief introduction to what we'll be building.

We'll build a REST API for a CrossFit Training Application. If you're not familiar with CrossFit, it's a fitness method and competitive sport that combines high-intensity workouts with elements from several sports (olympic weightlifting, gymnastics, and others).

In our application we'd like to create, read, update and delete WOD's (Workouts of the Day). This will help our users (that will be gym owners) come up with workout plans and maintain their own workouts inside a single application. On top of that, they also can add some important training tips for each workout.

Our job will require us to design and implement an API for that application.

## Note

// Version 1
> "/api/v1/workouts"

// Version 2
> "/api/v2/workouts"

## Avoid verbs in endpoint names

// Current implementations (without verbs)
GET "/api/v1/workouts"
GET "/api/v1/workouts/:workoutId"
POST "/api/v1/workouts"
PATCH "/api/v1/workouts/:workoutId"
DELETE "/api/v1/workouts/:workoutId"  

// Implementation using verbs
GET "/api/v1/getAllWorkouts"
GET "/api/v1/getWorkoutById/:workoutId"
CREATE "/api/v1/createWorkout"
PATCH "/api/v1/updateWorkout/:workoutId"
DELETE "/api/v1/deleteWorkout/:workoutId"
