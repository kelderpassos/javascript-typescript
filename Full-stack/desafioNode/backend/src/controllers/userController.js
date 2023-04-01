const userService = require('../services/userService');
const auth = require('../utils/auth');
const ErrorHandler = require('../utils/ErrorHandler');

module.exports = {
  create: async (req, res) => {
    const {
      name,
      lastName,
      age,
      cpf,
      email,
      password,
      fatherName,
      motherName,
      address,
    } = req.body;

    const validFields = [
      'name',
      'lastName',
      'age',
      'cpf',
      'email',
      'password',
      'fatherName',
      'motherName',
      'address',
    ]

    const missingFields = validFields.reduce((acc, key) => {
      if (!req.body[key]) acc.push(key);
      return acc;
    }, []);

    if (missingFields.length > 0) {
      throw new ErrorHandler(400, `Missing fields: ${missingFields.join(', ')}`);
    }

    const newUser = await userService.create({
      name,
      lastName,
      age,
      cpf,
      email,
      password,
      fatherName,
      motherName,
      address,
    });

    return res.status(201).json(newUser);
  },

  readAll: async (req, res) => {
    const { authorization } = req.headers;

    auth.validateToken(authorization);

    const allUsers = await userService.readAll();

    return res.status(200).json(allUsers);
  },

  readOne: async (req, res) => {
    const { id } = req.params;

    if (!id) throw new ErrorHandler(404, 'Missing params');

    const specificUser = await userService.readOne(id);

    return res.status(200).json(specificUser);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const {
      name,
      lastName,
      age,
      cpf,
      email,
      password,
      fatherName,
      motherName,
      address
    } = req.body;

    if (!id) throw new ErrorHandler(404, 'Missing params');

    const updatedUser = await userService.update(id, {
      name,
      lastName,
      age,
      cpf,
      email,
      password,
      fatherName,
      motherName,
      address
    });

    return res.status(200).json(updatedUser);
  },

  delete: async (req, res) => {
    const { id } = req.params;

    if (!id) throw new ErrorHandler(404, 'Missing params');

    await userService.delete(id);

    return res.status(200).json({ message: 'User deleted' });
  },
};
