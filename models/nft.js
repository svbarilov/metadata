const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema & model
const NftSchema = new Schema({
    key: {
        type: String,
        unique: true,
        required: [true, 'Key is a required field']
    },
    name: {
        type: String,
        required: [true, 'Name is a required field']
    },
    description: {
        type: String,
        required: [true, 'Description is a required field']
    },
    image: {
        type: String,
        required: [true, 'Image url is a required field']
    },
    attributes: {
        type: Array
    }
});

const Nft = mongoose.model('pureprana-nft', NftSchema);

module.exports = Nft;
