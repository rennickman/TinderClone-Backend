import mongoose from "mongoose";



// Schema for Tinger Profiles
const cardSchema = mongoose.Schema({
    name: String,
    imgUrl: String
});


export default mongoose.model("cards", cardSchema);