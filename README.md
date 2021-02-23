# Tapper

#### By Cory Nordenbrock
##### 2/22/20

## Deployment

* [Check it out!](https://cordenbrock.github.io/tapper/)

## _What_ does it do?

* This web app allows a barkeep to track and manage inventory for a Tapper-themed taproom. 

## _Why_ does it do?

* This project was prompted by the wonderful people at [Epicodus](https://www.epicodus.com/) as an exercise in building a frontend React SPA with a full CRUD interface and to create a Redux store along with corresponding actions/reducers to manage all state. Additionally, the source code contains basic unit tests for all reducer functions to demonstrate how to use Jest's testing framework.

## Component Tree

![Component Tree](./component-tree.png)

## Setup Instructions

* Basic Requirements
1. In order to utilize react-scripts, build the app, and run a local server, [Node.JS](https://nodejs.org/en/download/) must be installed. If using NPM as your package manager, your version will need to be at least 5.2.0 or newer. If you have an older version of NPM, run the following command in the terminal to update it: ` npm install -g npm `

* To run program locally:

1. Using your preferred terminal/CLI, clone this repository: ` git clone https://github.com/cordenbrock/tapper-redux.git `
2. Navigate to the root directory: ` cd tapper-redux `
3. Open with VScode or preferred IDE: ` code . `
4. Install all dependencies: ` npm install `
5. Serve up the app: ` npm start `
6. The last command should automatically open http://localhost:3000 in your default web browser to then use the app, otherwise enter the aformenetioned URL in your browser-of-choice manually.


## Built with/Tools used

* _React/Create-React-App_
* _React-Redux, Redux_
* _CSS, Bootstrap_
* _HTML_
* _Jest_
* _VSCode_

### Known Bugs/Future Improvements

* Add CSS styling to indicate low tap status

### Legal

MIT License, (c) 2020 Cory Nordenbrock