const {Router} = require("express")
const {getFarmerById,postFarmer,getAllFarmers,getNofarmers,httpgetMobileById,httpgetfarmerByFarmerId,httpUpdateFarmer} =require('./alldata.controller')
const farmerRouter = Router();

farmerRouter.get('/getfarmer/:id',getFarmerById);
farmerRouter.post('/postfarmer',postFarmer)
farmerRouter.get('/getallfarmers',getAllFarmers)
farmerRouter.get('/getregno/:state/:dist',getNofarmers)
farmerRouter.get('/getregno/:state/:dist',getNofarmers)
farmerRouter.get('/getmobilebyid/:id',httpgetMobileById)
farmerRouter.get('/getfarmerbyfarmerid/:id',httpgetfarmerByFarmerId)
farmerRouter.patch('/updatefarmer/:id',httpUpdateFarmer)


module.exports = {
    farmerRouter     
}