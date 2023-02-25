const express = require("express")
const app = express()
const UserRouter = require("./src/routes/UserRoute")

app.use(express.json())
app.use("/user", UserRouter)

app.listen(3000, () => console.log(`
    Servidor iniciado na porta 3000
`))