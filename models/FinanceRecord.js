const mongoose = require('mongoose');

const financeSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      enum: ['income', 'expense'],
      required: true
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model('FinanceRecord', financeSchema);