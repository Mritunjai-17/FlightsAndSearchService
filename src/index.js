const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
// const { City, Airport  } = require('./models/index');
// const { Airplane } = require('./models/index');

const setupAndStartServer = async () => {

    //create express obejct
    const app = express();
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use('/api', ApiRoutes);
    
  console.log("PORT =", PORT);

app.listen(PORT, async () => {
    console.log(`Server is running on port ${PORT}`);
    if(process.env.DB_SYNC) {
     db.sequelize.sync({alter: true});
    }
    // await Airplane.create({  (this is for testing purpose only, we will use seeders to add data to the database through this we can add data directly to the database without using seeders.)
    //   modelNumber: 'Bombaedier CRJ',
    //   capacity: 300
    // });
});

}
setupAndStartServer();