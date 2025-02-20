const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose
  .connect('mongodb://localhost:27017/finance-tracker')
  .then(() => {
    console.log(chalk.magenta('DB CONNECTED'));
  })
  .catch(e => {
    console.log(chalk.red(e));
  });

module.exports = mongoose;
