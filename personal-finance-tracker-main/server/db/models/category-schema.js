const { Schema, model } = require('mongoose');

const categorySchema = Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      default: "Uncategorized",
      trim: true,
    },
    type: {
      type: String,
      required: true,
      enum: ["income","expense"],
    },
  },
  { timestamps: true }
);

const Category = model('category', categorySchema);

module.exports = Category;
