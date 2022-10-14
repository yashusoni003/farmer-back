const {Router} = require("express")
const {httpGetMarketPrice,httpPostMarketPrice} =require('./market.controller')
const marketRouter = Router();

marketRouter.get('/getmarket/:place',httpGetMarketPrice);
marketRouter.post('/postmarket',httpPostMarketPrice);

module.exports = {
    marketRouter     
}