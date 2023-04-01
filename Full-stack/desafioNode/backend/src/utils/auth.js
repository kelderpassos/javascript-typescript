const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/ErrorHandler');
require('dotenv').config();

const SECRET = process.env.JWT_SECRET;

module.exports = {
  createToken: (payload) =>
    jwt.sign({ payload }, SECRET, { expiresIn: '1d', algorithm: 'HS256' }),

  validateToken: (token = null) => {
    if (!token) throw new ErrorHandler(401, 'Token not provided');

    try {
      return jwt.verify(token, SECRET);
    } catch (error) {
      throw new ErrorHandler(400, 'Invalid or Expired token');
    }
  },
};
