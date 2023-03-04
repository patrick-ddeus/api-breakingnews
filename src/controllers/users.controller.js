const UserService = require("../services/users.service")

exports.findAll = async (req, res) =>{
    const users = await UserService.findAllService()

    if(users.length === 0){
       return res.status(401).send({message: "Theres no users"})
    }

    res.status(200).send(users)
}

exports.create = async (req, res) =>{
    
}