const {Schema, model} = require("mongoose")

const schema = new Schema({
    flowerName: {
        type: String,
        required: true
    },
    category: String/* {type: Schema.Types.ObjectId, ref: "Category"} */,
    userId: String/* {type: Schema.Types.ObjectId, ref: "User"} */
}, {
    timestamps: true
})

module.exports = model("Flower", schema)