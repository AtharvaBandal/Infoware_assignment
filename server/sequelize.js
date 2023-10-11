import Sequelize  from 'sequelize';
import dotenv from "dotenv";
dotenv.config();


export const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.USERNAME, process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  logging: true, // Set to true to see SQL queries in the console
});


