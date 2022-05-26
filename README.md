# Interview Scheduler
Interview Scheduler is a single page app that uses React and PostgresSql under the hood. It simulates a web portal that allows students to view and book appointments with instructors. It utilize storybook for building components in isolation, Jest for integration testing and Cypress for end-to-end testing.

## Features

* `View and Book Appointments`
* `Update or Cancel Appointments`
* `Mobile and Desktop View`
* `Automated Testing`

## 

!["Screenshot"](https://raw.githubusercontent.com/GSingh1994/scheduler/master/docs/scheduler.gif)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## Running Tests (Ensure Scheduler API and PSQL db are running)

* `npm test` for Jest tests
* `npm run storybook` and visit http://localhost:9009
* `npm run cypress` and restart Scheduler API in test environment with `NODE_ENV=test npm start`

## Dependencies

- react
- react-dom
- react-scripts
- axios
- classnames
- normalize.css

## Dev Dependencies

- @babel/core
- @storybook/addon-actions
- @storybook/addon-backgrounds
- @storybook/addon-links
- @storybook/addons
- @storybook/react
- @testing-library/jest-dom
- @testing-library/react
- @testing-library/react-hooks
- babel-loader
- cypress
- node-sass
- prop-types
- react-test-renderer
