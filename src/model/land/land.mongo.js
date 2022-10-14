const mongoose = require("mongoose");

const landInfoSchema = new mongoose.Schema({
  landTitle: String,
  district: String,
  taluka: String,
  village: String,
  oldSurveyNumber: String,
  newSurveyNumber: String,
  UPIN: String,
  totalArea: String,
  landUse: String,
  owner: String,
  tenure:String,
  shape:String,
  totalAssesment:String
});

module.exports = mongoose.model("landInfo", landInfoSchema);
