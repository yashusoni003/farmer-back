const {Router} = require("express")
const {getFarmerById,postFarmer,getAllFarmers} =require('./alldata.controller')
const farmerRouter = Router();

farmerRouter.get('/getfarmer/:id',getFarmerById);
farmerRouter.post('/postfarmer',postFarmer)
farmerRouter.get('/getallfarmers',getAllFarmers)

module.exports = {
    farmerRouter     
}