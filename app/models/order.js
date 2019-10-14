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
    type: String
  },
  datePurchased: {
    type: Date,
    default: Date.now
  },
  location: {
    street: String,
    city: String,
    state: String,
    zipCode: Number,
    country: String
  },
  cost: {
    type: Number
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
