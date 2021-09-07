import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../interfaces/controller.interface';
import RestaurantsService from "./restaurnats.service";

class RestaurantsController implements Controller {
    public path = '/restaurants';
    public router = Router();
    private restaurantsService = new RestaurantsService();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(`${this.path}/get-all`, this.getAll);
        this.router.get(`${this.path}/get-one/:id`, this.getOne);
        this.router.post(`${this.path}/create-restaurant`, this.createRestaurant);
        this.router.put(`${this.path}/update-restaurant/:id`, this.updateRestaurant);
        this.router.delete(`${this.path}/delete-restaurant/:id`, this.deleteRestaurant);
    }

    /**
     * @swagger
     * /restaurants/get-all:
     *   get:
     *     tags:
     *      - restaurants
     *     description: Get All Restaurants
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Success
     */
    private getAll = async (request: Request, response: Response, next: NextFunction) => {
        const restaurants = await this.restaurantsService.getAll();
        response.status(200).json({
            status: "success",
            data: {
                restaurants
            }
        })
    }

    /**
     * @swagger
     * /restaurants/get-one/:id:
     *   get:
     *     tags:
     *      - restaurants
     *     description: Get One Restaurant
     *     parameters:
     *      - name: id
     *        required: true
     *        type: number
     *        in: query
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Success
     *
     */
    private getOne = async (request: Request, response: Response, next: NextFunction) => {
        const id = request.query.id;
        const restaurant = await this.restaurantsService.getOne(id);
        response.status(200).json({
            status: "success",
            data: {
                restaurant
            }
        })
    }

    /**
     * @swagger
     * /restaurants/create-restaurant:
     *   post:
     *     tags:
     *      - restaurants
     *     description: Create Restaurant
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                  type: string
     *                  description: Name
     *               location:
     *                  type: string
     *                  description: Location
     *               price_range:
     *                  type: number
     *                  description: Price Range
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Success
     *
     */
    private createRestaurant = async (request: Request, response: Response, next: NextFunction) => {
        const { name, location, price_range } = request.body;
        const restaurant = await this.restaurantsService.createRestaurant(name, location, price_range)
        response.status(201).json({
            status: "success",
            data: {
                restaurant
            }
        })
    }//Consolas, 'Courier New', monospace

    /**
     * @swagger
     * /restaurants/update-restaurant/:id:
     *   put:
     *     tags:
     *      - restaurants
     *     description: Update Restaurant
     *     parameters:
     *      - name: id
     *        required: true
     *        type: number
     *        in: query
     *     requestBody:
     *       required: false
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                  type: string
     *                  description: Name
     *               location:
     *                  type: string
     *                  description: Location
     *               price_range:
     *                  type: number
     *                  description: Price Range
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Success
     *
     */
    private updateRestaurant = async (request: Request, response: Response, next: NextFunction) => {
        console.log("request.body: ", request.body);
        console.log("request.params.id: ", request.query.id)
        // console.log("body: ", Object.values(request.body));
        const restaurant = await this.restaurantsService.updateRestaurant(request.query.id, request.body);
        response.status(200).json({
            status: "success",
            data: {
                restaurant
            }
        })
    }
 
    /**
     * @swagger
     * /restaurants/delete-restaurant/:id:
     *   delete:
     *     tags:
     *      - restaurants
     *     description: Delete One Restaurant
     *     parameters:
     *      - name: id
     *        required: true
     *        type: number
     *        in: query
     *     produces:
     *       - application/json
     *     responses:
     *       200:
     *         description: Success
     *
     */
     private deleteRestaurant = async (request: Request, response: Response, next: NextFunction) => {
        const id = request.query.id;
        const restaurant = await this.restaurantsService.deleteRestaurant(id);
        response.status(200).json({
            status: "success",
            data: {
                restaurant
            }
        })
    }
}

export default RestaurantsController;