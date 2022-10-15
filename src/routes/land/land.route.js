const {Router} = require("express")
const {httpGetLandDetails,httpPostLandDetails,httpGetLandByNameDetails} =require('./land.controller')
const landRouter = Router();

landRouter.get('/getland/:upin',httpGetLandDetails);
landRouter.get('/getlandbyname',httpGetLandByNameDetails);
landRouter.post('/postland',httpPostLandDetails);

module.exports = {
    landRouter     
}