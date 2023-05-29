const express = require("express")
const Category = require("../models/Category")
const Flower = require("../models/Flower")
const router = express.Router({mergeParams: true})

router.get("/", async (req, res) => {
    try {
        const categoriesList = await Category.find()
        const flowersList = await Flower.find()
        res.status(200).send({flowersList, categoriesList})
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка, попробуйте позже"
        })
    }
})

router.post("/flowers", async (req, res) => {
    try {
        console.log(req.body)
        const newFlower = await Flower.create({...req.body})
        res.status(200).send(newFlower)
    } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка, попробуйте позже"
        })
    }
})

module.exports = router