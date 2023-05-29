const express = require("express")
const config = require("config")
const chalk = require("chalk")
const mongoose = require("mongoose")
const initDatabase = require("./startUp/initDatabase")
const routes = require("./routes")
const cors = require('cors');

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors());

app.use("/api", routes)

const PORT = config.get("port") ?? 8080

/* if(process.env.NODE_ENV === "production") {
    console.log("production")
} else {
    console.log("development")
} 
dimanya35
0T0q4UYXmi4N5dLc
*/

async function start() {
    try {
        mongoose.connection.once("open", () => {
            initDatabase()
        })
        await mongoose.connect(config.get("mongoUri"))
        app.listen(PORT, () => 
        console.log(chalk.green(`Server has been started on port ${PORT}...`))
    )
    } catch (e) {
        console.log(chalk.red(e.message))
        process.exit(1)
    }
}

start()

