const UserModel = require("../models/user.model")

const findAllService = () => UserModel.find()

module.exports = { findAllService }