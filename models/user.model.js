const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: Schema.Types.String,
      required: true,
    },
    surname: {
      type: Schema.Types.String,
      required: true,
    },
    birthDate: {
      type: Schema.Types.Date,
      required: true,
    },
    gender: {
      type: Schema.Types.String,
      required: true,
    },
    email: {
      type: Schema.Types.String,
      required: true,
    },
    password: {
      type: Schema.Types.String,
      required: true,
      min: 4,
    },
    avatar: {
      type: Schema.Types.String,
      required: false,
    },
  },
  {
    minimize: true,
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema, "user");

module.exports = User;
