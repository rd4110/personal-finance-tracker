const { Schema, model } = require('mongoose');

const userSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'USER',
      immutable: true,
    },
    // firstname: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // lastname: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },

    // image: {
    //   type: String,
    //   default: 'http://localhost:8000/image/user.png',
    // },
    // phonenumber: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // address: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
  },
  { timestamps: true }
);

const User = model('users', userSchema);

module.exports = User;
