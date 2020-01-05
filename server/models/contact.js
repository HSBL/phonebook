'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Contact extends Model {}
  Contact.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
        len: [6,15],
        // isPhone(value) {
        //   const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
        //   if(!regex.test(value)) {
        //     throw new Error('Only phone number allowed!')
        //   }
        // }
      }
    }
  }, { sequelize, modelName: 'Contact'});
  Contact.associate = function(models) {
    // associations can be defined here
  };
  return Contact;
};