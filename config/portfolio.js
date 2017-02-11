let mongoose = require('mongoose');

// create a model class
let portfolioSchema = mongoose.Schema({
    name: String,
    rating: Number,
    cost: Number
},
{
  collection: "portfolio"
});

module.exports = mongoose.model('portfolio', portfolioSchema);
