const { User, Address } = require('../database/models');
const ErrorHandler = require('../utils/ErrorHandler');

const checkIfUserAlreadyExists = async (cpf) => {
  const existingUser = await User.findOne({ where: { cpf } });

  if (existingUser) throw new ErrorHandler(400, 'User already exists');
};

module.exports = {
  create: async (infos) => {
    const { name, lastName, age, cpf, email, fatherName, motherName, address } =
      infos;
    await checkIfUserAlreadyExists(cpf);

    const { id } = await User.create(infos);
    await Address.create({ ...address, userId: id });

    return { id, name, lastName, age, cpf, email, fatherName, motherName, address };
  },

  readAll: async () => User.findAll({ include: [ { model: Address, as: 'address' } ], attributes: { exclude: 'password' } }),

  readOne: async (id) =>
    User.findByPk(id, { include: [ { model: Address, as: 'address' } ], attributes: { exclude: 'password' } }),

  update: async (params, infos) => {
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
    } = infos;

    const { id } = await User.update(
      { name, lastName, age, cpf, email, password, fatherName, motherName },
      { where: { id: params } }
    );

    await Address.update({...address, userId: id}, { where: { id: params }});

    return User.findByPk(params, { include: [ { model: Address, as: 'address' } ], attributes: { exclude: 'password' } });
  },

  delete: async (id) => User.destroy({ where: { id } }),

  findByEmail: async (email) => User.findOne({ where: { email } }),
};
