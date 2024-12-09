const express = require("express")
const cors = require("cors")
const sequelize = require("./config/db")
const path = require("path")

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())
app.use("/uploads",express.static(path.join(__dirname,"uploads")))


const User = require("./routes/user.route")
app.use("/api", User)

const Category = require("./routes/category.route")
app.use("/api", Category)

const Design = require("./routes/desing.route")
app.use("/api", Design)


const PORT = process.env.PORT || 3001

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log("app is listening");
    })
})