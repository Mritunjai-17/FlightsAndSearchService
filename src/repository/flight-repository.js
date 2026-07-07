const { Op } = require('sequelize');
const {Flights} = require('../models/index');

class FlightRepository {

    #createFilter(data){
        let filter = {};
        if(data.arrivalAirportId){
            filter.arrivalAirportId = data.arrivalAirportId;
        }
        if(data.departureAirportId){
            filter.departureAirportId = data.departureAirportId;
        }
        //first approch =>
        // if(data.minPrice && data.maxPrice){
        //     Object.assign(filter, {
        //         [Op.and]:[
        //             { price: {[Op.lte]: data.maxPrice} },
        //             { price: {[Op.gte]: data.minPrice} }
        //         ]
        //     });
        // }
        let priceFilter = []; // second approch by using price filter or array based approch
        if(data.minPrice){
            // Object.assign(filter, {                    // third approch by using simple if block or multiple check 
            //     price: {[Op.gte]: data.minPrice}});
            priceFilter.push({
                 price: {[Op.gte]: data.minPrice}});
        }
        if(data.maxPrice){
            // Object.assign(filter, {
            //     price: {[Op.lte]: data.maxPrice}});
            priceFilter.push({
                 price: {[Op.lte]: data.maxPrice}});
        }
        if(priceFilter.length > 0){
                 filter[Op.and] = priceFilter;
        }

        // object.assign( filter, {[Op.and]: [{ price: {[Op.lte]: 7000}}, { price: {[Op.gte]: 4000} }]})  // fourth aproch 
        // console.log(filter);
        return filter;
    }

    async createFlight(data){
        try {
            const flight = await Flights.create(data);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }   
    }

    async getFlight(flightId){
        try {
            const flight = await Flights.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }   
    }

    async getAllFlight(filter){
        try {
            const filterObject = this.#createFilter(filter);
            const flight = await Flights.findAll({
                where: filterObject
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }   
    }

    async updateFlight(flightId, data){
        try {
            await Flights.update(data, {
                where: {
                    id: flightId
                }
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw { error };
        }
    }
}

module.exports = FlightRepository;
 /*
    {
        where: {
            arrivalAirportId: 2,
            departureAirportId: 4,
            price: {[Op.gre]:4000}
        }
    }
*/