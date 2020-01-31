# FitScribe React App

## [Live Link](https://matt9663-fitscribe-app.now.sh/)

This repo conatins all the files for the client of my FitScribe site, built using React. The goal of this site is to create an easy-to-use platform for users to build and plan workout routines. This app connects with a Node/Express server, which pulls data from a PostgreSQL database.

The current version has 3 distinct sections: Exercises, Workouts, and Plan:

![dashboard](https://user-images.githubusercontent.com/51541006/73509720-03903200-43d8-11ea-9516-cf7c1a026bea.png)

The Exercises section is where users can log exercises that they like to do, and categorize them by muscle group.  The list is aggregated from all users and can be filtered for ease of reference. 

![exercises](https://user-images.githubusercontent.com/51541006/73509724-07bc4f80-43d8-11ea-88d8-f558fcf4e536.png)

Workouts is where users can compile their exercies into full routines. For each exercise, they can specify the amount of weight they want to use, the number of sets to perform, and the number of reps to complete in each set. These workout routines can be named and saved to go back and reference later. 

![workouts](https://user-images.githubusercontent.com/51541006/73509726-0b4fd680-43d8-11ea-913f-c024a7d2510a.png)

The Plan section gives the user a 7 day model where they can plug in saved workouts to each individual day, allowing them to map out what they want to do that week. In order to track progress throughout the week, the user can come in and mark a day as completed.

![plan](https://user-images.githubusercontent.com/51541006/73509730-0db23080-43d8-11ea-9bf0-cfe9da2d5f9c.png)