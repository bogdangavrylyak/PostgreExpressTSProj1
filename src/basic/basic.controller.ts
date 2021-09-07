import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../interfaces/controller.interface';

class BasicController implements Controller {
    public path = '/basic';
    public router = Router();
  
    constructor() {
      this.initializeRoutes();
    }
  
    private initializeRoutes() {
      this.router.get(`${this.path}/:id`/*, authMiddleware*/, this.getBasic);
    }
  

    /** 
     * @swagger 
     * /basic/get-basic: 
     *   get:
     *     tags: 
     *      - basic 
     *     description: Basic EndPoint 
     *     parameters: 
     *      - name: id
     *        required: false
     *        type: number
     *        in: query
     *     produces:
     *       - application/json
     *     responses:  
     *       200: 
     *         description: Success  
     *   
     */ 
    private getBasic = async (request: Request, response: Response, next: NextFunction) => {
        const id = request.query.id;
        response.json({
            message: `Basic EndPoint Request with ID: ${id*2}`,
        })
    }
  }
  
  export default BasicController;