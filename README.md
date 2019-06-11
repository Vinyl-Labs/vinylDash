![alt text](https://i.imgur.com/BLOwnS4.png "Vinyl Logo")

### By Kyle Pearson

## Introduction

Vinyl Dash is an admin dashboard for a DJ booking platform that allows users to manage their live sets and fanbase.

## Installation Instructions

If you would like to fork/clone this repository simply run `npm install` from within your local directory to install all dependencies.

## Mockups
- I designed the mockups using Figma. I wanted to use a clean and simple UI for the dashboard.
- Logos, icons and other customer images were created with adobe illustrator.

  ![alt text](https://imgur.com/BJJhOMh.png "Dashboard View")
  ![alt text](https://imgur.com/7f6n41u.png "Create Event View")
  ![alt text](https://imgur.com/kKi8WuK.png "Music Analytics")

## Technologies Used

- **React.js:**
  - Built the frontend client with react.js
  - Decided against usering redux due to the simplicity of the project. As an alternative I used `Unsated` Which uses reacts internal `Context Api` which allows for a more simple state manangement.
  -
- **Firestore Realtime Database:**
  - Decided to use google Firestore for this project since I will be updating the database from several platforms: `Vinty Dash`, `Vinyl Box`, and `Vinyl app`.
  -
- **Typescript:**
- **Ramda Fantasy:**
    - Since I will be using data from external platforms in this project, I wanted a safe way to access and use this data. The functional concept`Maybe` allows me this security while also letting me keep type safety.
  -
- **Styled Components:**

## Related Projects

- **Vinyl Box:**

  - Vinyl box is an android things IOT application that allows you to capture, analyze, and Identify track audio.
  - Every 15 seconds the application will attempt to "discover" the audio from the selected audio source. When successful the tracks metadata will be sent to the Firestore Database.
  -
