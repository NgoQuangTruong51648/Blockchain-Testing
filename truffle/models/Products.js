const mongoose = require("mongoose")

const ProductSchema = new mongoose.Schema({
    title: {type : String, required : true},
    desc : {type : String},
    photo : {type : String},
    price : {type : Number, required : true},
    author : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    owner : { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ,
    buyer : { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ,
    categories : {type : Array},
    indexItem : {type : String},
    state : {type : String},
    itemAdd : {type : String},
    isForSale : {type : Boolean, default : false},
    attr : {type: Object},
    like : {type : Array}
}, {timestamps : true})

module.exports = mongoose.model("Product", ProductSchema)