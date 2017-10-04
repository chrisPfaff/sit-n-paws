//host listings

var mongoose = require('mongoose');
var sitnpaws = require('../config')

listingSchema = new mongoose.Schema(
  {
    zipcode: { type: Number, required: true },
    name: { type: String, required: true },
    dogSizePreference: { type: String, required: true },
    dogBreedPreference: { type: String, required: true },
    dogTemperatmentPreference: { type: String, required: true },
    dogActivityPreference: { type: String, required: true },
    homeAttributes: { type: String, required: true },
    hostPictures: { data: Buffer, contentType: String },
    homePictures: { data: Buffer, contentType: String },
    //cost per night
    cost: { type: Number, required: true }
    //user rating
  }
);

var Listing = mongoose.model('Listing', listingSchema)

module.exports = Listing;
