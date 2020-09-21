# Udacity React Native Project - Mobile Flashcards


## Table of Contents

* [Description](#Description)
* [Features](#Features)
* [Requirements](#Requirements)
* [Quick Start](#Quick-Start)
* [Usage with Expo Client App](#Usage-with-Expo-Client-App)
* [Tested Platforms](#Tested-Platforms)

## Description

For the UdaciCards project, you will build a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

### Why this project?
This project encompasses the fundamental aspects of building a native application including handling infinite lists, routing, and user input. By building this project, you will gain an understanding of how to use React Native to build an iOS and Android application.

### This project uses the following ingredients:
* bootstrapped with [Expo](https://docs.expo.io/)
* [React Native](https://reactnative.dev/)
* [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* [Redux](https://redux.js.org/)
* [Redux Toolkit](https://redux-toolkit.js.org/)
* [Async Storage](https://react-native-community.github.io/async-storage/)
* [React Navigation](https://reactnavigation.org/)
* [Expo Notifications](https://docs.expo.io/versions/latest/sdk/notifications/)


## Features

* View all decks
* Create decks
* Remove decks
* Create cards
* Start a quiz
* Notifications are generated at 9:00 AM if the user hasn't completed at least one quiz for that day

### Optional

* Runs with notification disabled in the web browser for compatibility reasons
  - more info: https://github.com/expo/expo/issues/6895)


## Requirements

* [Node.js](https://nodejs.org/en/download/)  >= v12
* [Expo CLI](https://docs.expo.io/workflow/expo-cli/) for debug/start or build the app


## Quick Start

Clone the repo and install all npm modules.
```bash
$ git clone https://github.com/techrick/udaci-reactnd-mobile-flashcards.git
$ cd udaci-reactnd-mobile-flashcards
$ npm i
$ expo start
```

## Usage with Expo Client App

Expo Client enables you to work with all of the [Components and APIs](https://facebook.github.io/react-native/docs/getting-started.html) in `react-native`, as well as the [JavaScript APIs](https://docs.expo.io/versions/latest/sdk/index.html) that the are bundled with the Expo App.

Expo Client supports running any project that doesn't have custom native modules added.

- Download the "Expo Client" app from the Play Store or App Store.
- Start your project with Expo
  - Install the CLI `npm i -g expo-cli`
  - open the project folder (e.g. udaci-reactnd-mobile-flashcards)
  - Start the project `expo start`
- Open the project:
  - Sign in to expo and the project will appear in the app.
  - Or point your phone's camera at the QR code in the terminal (press "c" to view it).


## Tested Platforms
* Android (Version 10)
* Web (Chrome + Firefox)
