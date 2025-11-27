import mongoose from "mongoose";

const { Schema } = mongoose;

const PersonSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  number: {
    type: String,
    required: true,
    match: /^[0-9]{11}$/
  }
});

const CarSchema = new Schema({
  model: {
    type: String,
    required: true,
    unique: true
  },
  year: {
    type: Number,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Person"
  }
});

const Person = mongoose.model("Person", PersonSchema);
const Car = mongoose.model("Car", CarSchema);

export { Person, Car };
