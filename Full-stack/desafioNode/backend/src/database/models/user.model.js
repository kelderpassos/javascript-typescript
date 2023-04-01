const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    age: DataTypes.INTEGER,
    cpf: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fatherName: DataTypes.STRING,
    motherName: DataTypes.STRING, 
  }, {
    underscored: true,
    timestamps: true,
  });

  User.associate = (models) => {
    User.hasMany(models.Address, { foreignKey: 'id', as: 'address', onDelete: 'CASCADE'})
  }

  return User;
};

module.exports = UserModel;