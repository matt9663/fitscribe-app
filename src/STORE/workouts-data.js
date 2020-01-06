export default [
  { 
    title: 'Basic Chest Workout',
    exercises: [
      { liftName: 'Barbell bench press', weight: 155, reps: 8, sets: 4, order: 1 },
      { liftName: 'Cable chest flys', weight: 20, reps: 15, sets: 4, order: 2 },
      { liftName: 'Incline dumbell bench press', weight: 55, reps: 10, sets: 3, order: 3 },
      { liftName: 'Push-ups', weight: 'Bodyweight', reps: 20, sets: 3, order: 4 },
      { liftName: 'Tricep cable pushdown', weight: 75, reps: 10, sets: 4, order: 5 }
    ],
    id: 1
  },
  { 
    title: 'Leg Day!',
    exercises: [
      { liftName: 'Barbell back squat', weight: 225, reps: 5, sets: 5, order: 1 },
      { liftName: 'Deadlift', weight: 235, reps: 5, sets: 4, order: 2, },
      { liftName: 'Leg Press Machine', weight: 360, reps: 10, sets: 3, order: 3 },
      { liftName: 'Leg Extensions', weight: 180, reps: 10, sets: 3, order: 4 },
      { liftName: 'Leg Curls', weight: 75, reps: 10, sets: 4, order: 5 }
    ],
    id: 2
  },
  { 
    title: 'Lat-focused Back workout',
    exercises: [
      { liftName: 'Pull-ups', weight: 'Bodyweight', reps: 12, sets: 3, order: 1 },
      { liftName: 'Lat pulldowns', weight: 130, reps: 10, sets: 4, order: 2, },
      { liftName: 'Bent-over Row', weight: 115, reps: 12, sets: 3, order: 3 },
      { liftName: 'One-arm dumbell row', weight: 50, reps: 10, sets: 3, order: 4 },
      { liftName: 'Dumbell Bicep Curls', weight: 25, reps: 12, sets: 4, order: 5 }
    ],
    id: 3
  }
]
