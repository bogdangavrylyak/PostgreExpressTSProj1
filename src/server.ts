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

