'use strict'

import { Model } from "sequelize";

interface RestaurantAttributes {
    // id: number; //dont add id if PostgreSQL!!!
    name: string;
    location: string;
    price_range: number;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Restaurant extends Model<RestaurantAttributes> implements RestaurantAttributes {
        // public id!: number;
        public name!: string | null;
        public location!: string | null;
        public price_range!: number | null;

        static associate(models: any) {

        }
    }

    Restaurant.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            location: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            price_range: {
                type: DataTypes.INTEGER,
                allowNull: false,
            }
        },
        {
            sequelize,
            tableName: 'Restaurants'
        });
    return Restaurant;
}

