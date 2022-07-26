# shopping-cart

## Description

[App] Creating a fake store using the fake store API 

> See it live on [optimistictrousers.github.io/TOP-shopping-cart](https://optimistictrousers.github.io/TOP-shopping-cart/)
> Or clone repo, cd into repo, then run "npm run start"

![screenshot of the battleship game](PLACE_URL_HERE)

## Purpose

Creating a multi-page application with react-router-dom, using Testing Library and Jest to test, and learning how to use context.

Beyond that, other learning outcomes were:

- Design reusable components
- Fetching mock data from the Fake Store API https://fakestoreapi.com/
- Practicing state management
- Using snapshot tests with Jest and Testing Library

## Features

1. a drag-and-drop option to place ships built entirely with vanilla JS.
2. uses ship images for an improved UX/UI that make use of calculated CSS offsets for proper placement.
3. a random placement button for users to simplify the placement of their ships.
4. an improved computer AI that selects random squares until a hit is registered, at which point the computer hits adjacent coordinates until the ship is sunk.
5. when a user sinks a ship, the image of the sunken ship is displayed. to me, this simulates the actual game during which your opponent must tell you which ship is sunk.

## Instructions

1. choose to randomize your ship placement or drag-and-drop each ship.
2. if you choose to drag-and-drop your ships, you will have the option to clear the board and start over OR choose to randomize instead.
3. if you choose to randomize your ship placement, you will need to refresh the page in order to revert back to drag-and-drop functionality.
4. click "start game" and have fun!

## Development

### Javascript Framework

- [React](https://github.com/facebook/create-react-app)

### Technologies used

<!-- - [Firebase](https://firebase.google.com/) - Cloud services (database, authentication) -->
- [ESLint](https://eslint.org/) - A linter tool to standardize code
- [Github Pages](https://pages.github.com/) - Hosting
- [Prettier](https://prettier.io/) - Code formatter
- [React Router](https://reactrouter.com/web/guides/quick-start) - Router tool for React applications
- [Jest-Fetch-Mock](https://github.com/jefflau/jest-fetch-mock) - Tool to mock fetch requests
<p align="left"> 
<a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> 
<a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>
<a href="https://jestjs.io" target="_blank"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a>
<a href="https://webpack.js.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a> 
</p>

## Areas for Improvement

1. the computer AI does not account for hitting a ship that is adjacent to the intitially hit ship. once the computer AI sinks the initially hit ship it currently will not return to the ship that was inadvertently hit. to improve this functionality would require some refactoring that i may return to in the future.
2. i began the project enthusiastically testing via jest but abandoned testing once the code got sufficiently complex; in reality, this was exactly the wrong time to shift away from testing.
3. both the drag-and-drop and the computer AI functionalities proved much more complex than i had originally expected, thus they both resulted in significant muddling of my code and adversely affected its readability. further, i encountered serious state issues that resulted in me opting to refresh the page for a new game rather than play a game of "whack-a-mole debugging".
4. not yet responsive. need media queries to stack the gameboards in a single column if mobile/tablet is portrait-oriented.

## Known Bugs

1. if user drags a ship off screen AND drops the ship off screen, the drag-and-drop will break and the page will need to be refreshed.
2. i opted to set overflow: hidden for the page because the drag-and-drop breaks when the page scrolls.
3. the drag-and-drop is not compatible with touch screens so the functionality could be hidden for mobile/tablet use. this would further allow scrollbars as needed/desired.
