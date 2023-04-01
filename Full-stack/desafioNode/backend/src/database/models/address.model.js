const AddressModel = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    userId: DataTypes.INTEGER,
    addressNumber: DataTypes.STRING,
    addressName: DataTypes.STRING,
    addressType: DataTypes.STRING,
    complement: DataTypes.STRING,
    neighborhood: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
  }, {
    timestamps: false,
    tableName: 'addresses',
    underscored: true,
  });

  Address.associate = (models) => {
    Address.belongsTo(models.Address, { foreignKey: 'userId', as: 'users'})
  }

  return Address;
};

module.exports = AddressModel;