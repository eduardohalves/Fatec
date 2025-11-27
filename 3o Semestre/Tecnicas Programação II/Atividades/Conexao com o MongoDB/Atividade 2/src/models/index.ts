import mongoose from "mongoose";
const { Schema } = mongoose;

const DistrictSchema = new Schema({
  name: { type: String, required: true }
});

const CitySchema = new Schema({
  name: { type: String, required: true },
  districts: { type: [DistrictSchema], default: [] }
});

const StateSchema = new Schema({
  name: { type: String, required: true, unique: true },
  abbreviation: { type: String },
  cities: { type: [CitySchema], default: [] }
});

const State = mongoose.model("State", StateSchema);

export { State };
