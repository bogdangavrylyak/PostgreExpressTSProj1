import db from '../models/index'

interface RestaurantAttributes {
    name: string;
    location: string;
    price_range: number;
}

class RestaurantsService {
    public async getAll() {
        return await db.Restaurant.findAll();
    }

    public async getOne(id : number) {
        return await db.Restaurant.findOne({
            where: {
                id: id,
            }
        })
    }

    public async createRestaurant(name: string, location: string, price_range : number) {
        const restaurant = await db.Restaurant.create({
            name: name,
            location: location,
            price_range: price_range,
        })
        console.log("Restaurant Created: ", restaurant);
        return restaurant;
    }

    public async updateRestaurant(id: number, properties: RestaurantAttributes) {
        try {
            const restaurant = await db.Restaurant.update(properties, {
                where: {
                    id: id,
                }
            })
            return restaurant;
        } catch {
            return null;
        }
    }

    public async deleteRestaurant(id: number) {
        const restaurant = await db.Restaurant.destroy({
            where: {
                id: id,
            }
        })
        return restaurant;
    }
}

export default RestaurantsService;