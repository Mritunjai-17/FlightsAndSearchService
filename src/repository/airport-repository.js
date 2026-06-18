const CrudRepository = require('./crud-repository');
const { Airport } = require('../models/index');

class AirportRepository extends CrudRepository{  //it directly takes the all function from the CrudRepository woth the help of extends("Inherit all properties and methods from another class.")
    constructor(){
        super(Airport);  //super() calls the constructor of the parent class.
    }
}

module.exports = AirportRepository;

// with the help of inheritance we are able to resolve duplicate code.