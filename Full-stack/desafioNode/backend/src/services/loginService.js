const userModel = require('../models/userModel');
const auth = require('../utils/auth');
const bcrypt = require('bcryptjs');
const ErrorHandler = require('../utils/ErrorHandler');

module.exports = {
  validateLogin: async ({ email, password }) => {
    const user = await userModel.findByEmail(email);

    if (!user) throw new ErrorHandler(401, 'Invalid E-mail');
    if (!bcrypt.compareSync(password, user.password)) throw new ErrorHandler(400, 'Invalid Password');

    return auth.createToken({ id: user.id, email: user.email });
  }
}