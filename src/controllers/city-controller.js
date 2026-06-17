const { CityService } = require('../services/index'); 

const cityService = new CityService();

/**
 * Methodtype should be POST
 * data should be come from req.body. with the help of req.body we can get the data from the request and then we can pass it to the service layer.
 */
const create = async (req, res) => {
    try {
        const city = await cityService.createCity(req.body);
            return res.status(201).json({
                data: city,
                success: true,
                message: 'Successfully created a city',
                err: {}
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {}, 
            success: false,
            message: 'Failed to create a city',
            err: error
        });
    }
}

// delete. -> /city/:id -> req.params.id -> we can get the id from the request params and then we can pass it to the service layer.
const destroy = async (req, res) => {
    try {
         const response = await cityService.deleteCity(req.params.id);
            return res.status(200).json({
                data: response,
                success: true,
                message: 'Successfully deleted a city',
                err: {}
            });
    } catch (error) {
        console.log(error);
         return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to delete a city',
            err: error
        });
    }
}

// patch -> /city/:id -> req.params.id -> we can get the id from the request params and then we can pass it to the service layer. 
// and then we can get the city details from the service layer and then we can return the response to the client.
const update = async (req, res) => {
    try {
        const response = await cityService.updateCity(req.params.id, req.body);
            return res.status(200).json({
                data: response,
                success: true,
                message: 'Successfully updated the city',
                err: {}
            });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to update the city',
            err: error
        });
    }
}

// GET -> /city/:id -> req.params.id -> we can get the id from the request params and then we can pass it to the service layer. 
// and then we can get the city details from the service layer and then we can return the response to the client.
const get = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id);
            return res.status(200).json({
                data: response,
                success: true,
                message: 'Successfully got the city',
                err: {}
            });
    } catch (error) {
        console.log(error);
         return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to get the city',
            err: error
        });
    }
}

const getAll = async (req, res) => {
    try{
        console.log(req.params); 
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
                data: cities,
                success: true,
                message: 'Successfully fetched all cities',
                err: {}
            });;
    }
    catch(error){
        console.log(error);
         return res.status(500).json({
            data: {},
            success: false,
            message: 'Failed to fetch all cities',
            err: error
        });
    }
}

module.exports = {
    create,
    destroy,
    update,
    get,
    getAll
}