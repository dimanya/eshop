const express = require("express")

const router = express.Router({mergeParams: true})

router.use("/auth",  require("./auth.routes"))
router.use("/", require("./flowers.routes"))

module.exports = router