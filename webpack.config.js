/*jshint esversion:6 */
const path = require('path');

module.exports = {
entry  : './src/app',
output : {
    path : path.join(__dirname,'public'),
    filename : 'bundle.js'
}
};