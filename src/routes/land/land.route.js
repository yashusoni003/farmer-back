const {Router} = require("express")
const {httpGetLandDetails,httpPostLandDetails} =require('./land.controller')
const landRouter = Router();

landRouter.get('/getland/:upin',httpGetLandDetails);
landRouter.post('/postland',httpPostLandDetails);

module.exports = {
    landRouter     
}