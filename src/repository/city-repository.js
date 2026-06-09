 const { Op } = require('sequelize');

const { City } = require('../models/index');

class CityRepository {
    async createCity({ name }) {
        try {
            const city = await City.create({ 
                name : name 
            });
            return city;
        } catch (error) {            
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destroy({ 
                where: { 
                    id: cityId 
                }
        });
        return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }

    async updateCity(cityId, data) {
        try {
            //The below approch also works but will not return the updated city object, it will return an array with number of rows updated
            //if we are using pgsql then returning: true can be used to return the updated city object but it is not supported in mysql, 
            // so we will use the below approach which works in all databases
            // const city = await City.update(data, {
            //     where: { 
            //         id: cityId 
            //     }
            // });
            // for getting updated data we use findByPk and then save method, this will work in all databases
            const city = await City.findByPk(cityId);
            city.name = data.name;
            await city.save();
             return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
     }

    async getCity(cityId) {
        try {
            const city = await City.findByPk(cityId);
            return city;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
    async getAllCities(filter) { // filter can be empty or can have some conditions like { name: 'Delhi' }
        try {
            if(filter.name) {
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }        
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}
module.exports = CityRepository;