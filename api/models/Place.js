const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref:'User'} ,
    title: String,
    address: String,
    photos: [String],
    description: String,
    perks: [String],
    extraInfo: String,
    checkIn: String,
    checkOut: String,
    maxGuests: {type: Number, required: true, min: 1},
    price: {type: Number, required: true, min: 1},
});

placeSchema.statics.removeById = async function(placeId) {
    try {
        const result = await this.findOneAndDelete({ _id: placeId });
        if (!result) {
            throw new Error('Place not found');
        }
        return result;
    } catch (error) {
        throw new Error('Failed to remove place: ' + error.message);
    }
};

const PlaceModel = mongoose.model('Place', placeSchema);

module.exports = PlaceModel;