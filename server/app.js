const express = require("express")
const config = require("config")
const chalk = require("chalk")
const mongoose = require("mongoose")

const app = express()

const PORT = config.get("port") ?? 8080

if(process.env.NODE_ENV === "production") {
    console.log("production")
} else {
    console.log("development")
}

app.listen(PORT, () => 
    console.log(chalk.green(`Server has been started on port ${PORT}...`))
)