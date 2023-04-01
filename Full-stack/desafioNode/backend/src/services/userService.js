const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs');
const ErrorHandler = require('../utils/ErrorHandler');

module.exports = {
  create: async (infos) => {
    const { password } = infos;

    const hash = bcrypt.hashSync(password, 8);

    try {
      return userModel.create({ ...infos, password: hash });
    } catch (error) {
      throw new ErrorHandler(400, 'User cannot be created');
    }
  },

  readAll: async () => {
    try {
      return userModel.readAll();
    } catch (error) {
      throw new ErrorHandler(404, "List of users couldn't be retrieved");
    }
  },

  readOne: async (id) => {
    try {
      return userModel.readOne(id);
    } catch (error) {
      throw new ErrorHandler(404, "User couldn't be found");
    }
  },

  update: async (id, infos) => {
    const { password } = infos;

    const hash = bcrypt.hashSync(password, 8);
    
    try {
      return userModel.update(id, {...infos, password: hash});
    } catch (error) {
      throw new ErrorHandler(400, "User couldn't be updated");
    }
  },

  delete: async (id) => {
    try {
      return userModel.delete(id);
    } catch (error) {
      throw new ErrorHandler(400, "User couldn't be deleted");
    }
  },
};
