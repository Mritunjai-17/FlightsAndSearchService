const express = require('express');
const bodyParser = require('body-parser');

const { PORT } = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index');
// const { City, Airport  } = require('./models/index');

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
});

}
setupAndStartServer();