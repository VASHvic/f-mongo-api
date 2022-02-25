import { Schema } from 'mongoose'; //afegir npm install types ongoose?

export const ProductSchema = new Schema({
  name: { type: String, required: true },
  desctiption: String,
  imageURL: String,
  price: Number,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
