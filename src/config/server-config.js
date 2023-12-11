const dotenv = require("dotenv"); // dotenv module return an objects

dotenv.config(); // on that object you have to call config function read dotenv doc

module.exports = {
  PORT: process.env.PORT,
};
