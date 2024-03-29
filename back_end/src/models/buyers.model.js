const mongoose = require('mongoose')
const { Schema } = mongoose

const BuyersSchema = new Schema({

    "user_id": {
        type: Schema.Types.ObjectId,
        ref: 'Users.model',
    },
    "address": {
        type: String,
        required: [true, "La direccion es obligatorio."],
    },
    "cartProducts": [{
        type: Schema.Types.ObjectId,
        ref: 'Products.model'
    }],
    "purchaseHistory": [{
        type: Schema.Types.ObjectId,
        ref: 'Purchase.model'
    }],
    "favoriteProducts": [{
        type: Schema.Types.ObjectId,
        ref: 'Products.model'
    }]

})

module.exports = mongoose.model('buyers', BuyersSchema)