const mongoose = require('mongoose');

const businessSchema = new mongoose.Schema({
	
business_id: {
    type: String,
    trim: true,
  },
   name: {
    type: String,
    trim: true,
  },
   address: {
    type: String,
    trim: true,
  },
   city: {
    type: String,
    trim: true,
  },
   state: {
    type: String,
    trim: true,
  }, 
  postal_code: {
    type: String,
    trim: true,
  },

   latitude: {
    type: String,
    trim: true,
  },

  longitude: {
    type: String,
    trim: true,
  },
  stars: {
    type: String,
    trim: true,
  },
  review_count: {
    type: String,
    trim: true,
  },

is_open: {
    type: String,
    trim: true,
  },

  attributes: {
    type: String,
    trim: true,
  },

  categories: {
    type: String,
    trim: true,
  },
  
   hours: {
    type: String,
    trim: true,
  },
});

module.exports = mongoose.model('Business', businessSchema);