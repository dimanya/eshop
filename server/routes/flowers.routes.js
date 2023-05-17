const express = require("express")
const Flower = require("../models/Flower")
const router = express.Router({mergeParams: true})

router.get("/", async (rec, res) => {
    try {
        const list = await Flower.find()
        res.status(200).send(list)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка, попробуйте позже"
        })
    }
})

module.exports = router