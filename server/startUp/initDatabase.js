const flowersMock = require("../mock/flowers.json")
const Flower = require("../models/Flower")

module.exports = async () => {
    const flowers = await Flower.find()
    if(flowers.length !== flowersMock.length) {
        await createInitialEntity(Flower, flowersMock)
    }
}

async function createInitialEntity(Model, data) {
    await Model.collection.drop()
    return Promise.all(
        data.map(async item => {
            try {
                delete item._id
                const newItem = new Model(item)
                await newItem.save()
                return newItem
            } catch (e) {
                return e
            }
        })
    )
}