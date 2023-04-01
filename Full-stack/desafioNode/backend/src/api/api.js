require('dotenv').config();
const express = require('express');
const cors = require('cors');
require('express-async-errors');
const loginRoute = require('../routes/loginRoutes')
const userRoute = require('../routes/userRoutes');
const errorMiddleware = require('../middlewares/error');

const app = express();

app.use(express.json());
app.use(cors());

app.use(loginRoute);
app.use(userRoute);

app.use(errorMiddleware);

module.exports = app;