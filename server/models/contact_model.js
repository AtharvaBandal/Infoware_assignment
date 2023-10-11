import { Sequelize, DataTypes } from 'sequelize';
import {sequelize} from '../sequelize.js';

const Contact = sequelize.define('Contact', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: DataTypes.STRING,
    },
    relationship: {
      type: DataTypes.STRING,
    },
  });
  

export default Contact;
