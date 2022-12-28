const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const architectureSchema = new Schema ({

    title: {type: String},
    architectOne: {type: String},
    architectTwo: {type: String},
    year: {type:String},
    img: [{type: String}],
    loc: {streetAddress: String, city: String, state: String, postalCode: String, country: String},
    link: {type: String},
    dayTag: {type: String},
    nightTag: {type: String},
    visits: {type: Number}
})


    
const Architecture = mongoose.model('Architecture', architectureSchema);
module.exports = Architecture;