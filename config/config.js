const config = {};

config.port = process.env.PORT || 5000;
config.dbURL = process.env.DATABASEURL || "mongodb+srv://tmeta:tmeta123456@cluster0.5ts29.mongodb.net/us_onlinechat";

module.exports = config;
