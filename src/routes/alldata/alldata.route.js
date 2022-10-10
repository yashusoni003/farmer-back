const {Router} = require("express")
const {getFarmerById,postFarmer} =require('./alldata.controller')
const farmerRouter = Router();

farmerRouter.get('/getfarmer',getFarmerById);
farmerRouter.post('/postfarmer',postFarmer)

module.exports = {
    farmerRouter     
}