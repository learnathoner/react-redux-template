export function capitalize (str = '') {
  return typeof str !== 'string'
    ? ''
    : str[0].toUpperCase() + str.slice(1)
}

// Useful dependencies:
// npm install react-icons react-loading --save-dev
// react-icons - Collection of icons for the app
// react-loading - Loading icon for modal
// LoggerMiddleWare - Logs all actions (unecessary with Redux_devtools)
//  * const loggerMiddleWare = createLogger();