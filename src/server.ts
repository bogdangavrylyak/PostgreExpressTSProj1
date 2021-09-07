require('dotenv').config();
import App from './app';
import BasicController from './basic/basic.controller';
import RestaurantsController from "./restaurants/restaurants.controller";

const app = new App(
  [
      new BasicController(),
      new RestaurantsController(),
  ],
);

app.listen();



// db.restaurant = require("./restaurants")(sequelize, Sequelize);

// pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
// },

// "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "npx ts-node ./src/server.ts",
//     "dev": "nodemon ./src/server.ts",
//     "build": "tsc"

//--inspect=5858 -r ts-node/register
//--inspect=5858
//--inspect=5858 -r
////    "start": "node --inspect=5858 -r ts-node/register ./src/server.ts",

// "test": "echo \"Error: no test specified\" && exit 1",
//     "start": "node --inspect=5858 -r ts-node/register ./src/server.ts",
//     "start:watch": "nodemon",
//     "build": "tsc"


// import {Table, Model, Column} from "sequelize-typescript";
// @Table
// export class Restaurant extends Model<Restaurant> {
//
//     @Column
//     public id! : number;
//
//     @Column
//     public name!: string | null;
//
//     @Column
//     public location!: string | null;
//
//     @Column
//     public price_range!: string | null;
// }

// Restaurant.init(
//     {
//         id: {
//
//         }
//     },
//     {
//         tableName: "users",
//         db.sequelize, // passing the `sequelize` instance is required
//     }
// )

// const Restaurant = sequelize.define('Restaurant', {
//     id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
//     email:
// })



// const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || 'development';
// const config = require(__dirname + '/../config/config.json')[env];

// const fs = require('fs');
// const path = require('path');

// let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
//   sequelize = new Sequelize(config.database, config.username, config.password, config);
// }


// const options = {
//   host: 'localhost', //config.HOST,
//   dialect: 'postgres', //config.dialect,
//   // pool: config.pool,
//   // logging: console.log,
//   // dialectOptions: {
//     // socketPath: `/cloudsql/${config.INSTANCE_CONNECTION_NAME}`
//   // }
// };

// const dialect = config.dialect;
// const sequelize = new Sequelize('postgres://postgres:root@127.0.0.1:5432/PERN1');



// module.exports = {
//     HOST: process.env.ANILINE_HOST,
//     INSTANCE_CONNECTION_NAME: process.env.ANILINE_INSTANCE_CONNECTION_NAME,
//     USER: process.env.ANILINE_USER || "root",
//     PASSWORD: process.env.ANILINE_PASSWORD,
//     DB: process.env.ANILINE_DATABASE,
//     FB_API_KEY: process.env.FB_API_KEY,
//     HUBSPOT_API_KEY: process.env.HUBSPOT_API_KEY,
//     PUBLIC_USER_UID: process.env.PUBLIC_USER_UID,
//     PUBLIC_HOST_NAMES: (process.env.PUBLIC_HOST_NAMES || '').split(","),
//     PORTAL_URL: process.env.PORTAL_URL || 'http://localhost:3000',
//     API_URL: process.env.API_URL || 'http://localhost:4000',
//     INTERNAL_EMAILS: (process.env.INTERNAL_EMAILS || '').split(","),
//     dialect: "postgres",
//     allRegionsId: 'e0f89b77-c9ca-4577-865e-1b0d450ba717',
//     anilineIds: ['ca12c3a9-f0cd-4dc6-a87a-331aafca94ab', '81f2cbbc-4495-45ed-bf36-c9b28e4d212d'],
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     },
// };