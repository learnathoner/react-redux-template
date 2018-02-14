# Create React App with Redux

## Basics

Enhanced create-react-app scaffold with common tools for Redux.

## Main Modifications:

### Added Dependencies

- **Basic Redux** - `redux`, `react-redux`
  - **Redux Helpers** - `redux-logger`, `redux-thunk`
- **React Helpers** - `react-modal`

### Index.js

- Create store using **rootReducer** with **Redux_devtools, logger, and thunk** Middleware.
- Pass App in through Provider and BrowserRouter

### Directory structure

Change src folder to contain folders:
- reducers
- actions
- style
- tests
- utils

### Include templates

- **Reducers** - Import combineReducer, export rootReducer
- **Actions** - Template for creating async thunk requests based on fetching "reddit posts"
- **Modal sample** - Sample component for implementing modal

### Suggestions

- **util/helpers file with suggestions** - Recommends additional helpful react dependencies, like `react-icons` and `react-loading` 
