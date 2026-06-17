const { FlightService } = require('../services/index');

const flightService = new FlightService();

const createFlight = async (req, res) => {
    try{
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            message: 'Successfully created a flight',
            err: {}
        });
    }
    catch(error){
     console.log(error);
        return res.status(500).json({
            data: {}, 
            success: false,
            message: 'Failed to create a flight',
            err: error
        });
    }
};
module.exports = {
    createFlight
}