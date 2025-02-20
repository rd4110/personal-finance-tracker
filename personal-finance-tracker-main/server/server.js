const express = require('express');
const cors = require('cors');
const chalk = require('chalk');
require('dotenv').config('./.env');
const db = require('./db');
const { requestInfo } = require('./middlewares');

const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(requestInfo);

//routes // api is used to differentiate backend
const routes = require('./routes');
app.use('/api', routes);

app.use('*', (req, res) => {
  console.log(chalk.red('404 Not found error'));
  return res.status(404).json({ error: true, message: 'No Route found' });
});

app.listen(8000, () => {
  console.log(chalk.blue.italic('App is running @ http://localhost:8000/'));
});
