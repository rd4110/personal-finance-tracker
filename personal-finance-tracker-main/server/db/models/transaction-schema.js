const { Schema, model } = require('mongoose');

const transactionSchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["income","expense"],
    },
    category: {
      type: String,
      required: true,
      default: "Uncategorized",
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const Transaction = model('transaction', transactionSchema);

module.exports = Transaction;
