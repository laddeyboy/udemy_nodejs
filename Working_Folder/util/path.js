// export a variable to help construct path to parent directory
const path = require('path');

// process is a global Node construct - mainModule is to the directory that started
// the app
module.exports = path.dirname(process.mainModule.filename);