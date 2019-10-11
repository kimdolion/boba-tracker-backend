const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  flavor: {
    type: String,
    required: true
  },
  toppings: {
    type: String,
    required: true
  },
  // could just write firstPublished: Number,
  datePurchased: {
    type: Number
  },
  originalLanguage: {
    type: String
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)
