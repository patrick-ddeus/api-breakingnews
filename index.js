const express = require("express")
const app = express()
const UserRouter = require("./src/routes/users.route")
const connectDatabase = require("./src/database/db")

const porta = 3000

app.use(express.json())
app.use("/user", UserRouter)

connectDatabase()
app.listen(porta, () => console.log(`
    Servidor iniciado na porta ${porta}
`))