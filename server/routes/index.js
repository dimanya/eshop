const express = require("express")

const router = express.Router({mergeParams: true})

router.use("/flowers", require("./flowers.routes"))

module.exports = router