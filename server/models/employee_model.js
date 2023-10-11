import { Sequelize, DataTypes } from 'sequelize';
import {sequelize} from '../sequelize.js';
import Contact from './contact_model.js';

const Employee = sequelize.define('Employee', {
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  jobTitle: {
    type: DataTypes.STRING,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  address: {
    type: DataTypes.STRING,
  },
  city: {
    type: DataTypes.STRING,
  },
  state: {
    type: DataTypes.STRING,
  },
});


Employee.hasMany(Contact, { as: 'contacts' });


export default Employee;