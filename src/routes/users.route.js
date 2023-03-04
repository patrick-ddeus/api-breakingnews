const Router = require("express").Router()
const UserController = require("../controllers/users.controller")

Router.get("/", UserController.findAll)

module.exports = Router