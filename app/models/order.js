const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  flavor: {
    type: String,
    required: true
  },
  toppings: {
    type: Array
  },
  datePurchased: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String
  },
  cost: {
    type: Number,
    min: 0,
    default: 3
  },
  color: {
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
