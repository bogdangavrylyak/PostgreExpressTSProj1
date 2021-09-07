import * as express from "express";
import * as swaggerJSDoc from 'swagger-jsdoc'; 
import * as swaggerUI from 'swagger-ui-express';
import * as cors from 'cors';
import * as morgan from 'morgan';
import { swaggerOptions } from "./utils/swaggerConfiguration";
import Controller from "./interfaces/controller.interface";
import db from './models/index';

//Swagger Configuration    
const swaggerDocs = swaggerJSDoc(swaggerOptions);  

class App {
    public app: express.Application;

    constructor(controllers: Controller[]){
        this.app = express();
        
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }

    public listen() {
        this.app.listen(process.env.PORT || 4000, () => {
            console.log(`Server is running in http://localhost:${4000}`)
        })
    }

    private async initializeMiddlewares() {
        // const restaurant = await db.Restaurant.create({
        //     // name: 'Pizza Hut',
        //     // location: 'vegas',
        //     // price_range: 2,
        //     name: 'Mc Donald\'s',
        //     location: 'New York',
        //     price_range: 3,
        // })
        // console.log("restaurant: ", restaurant);
        // await db.sequelize.sync();
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan("dev"));
        this.app.use('/api-docs',swaggerUI.serve, swaggerUI.setup(swaggerDocs)); 
    }

    private initializeControllers(controllers: Controller[]) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        });
    }

    public getServer() {
        return this.app;
    }
}

export default App;
