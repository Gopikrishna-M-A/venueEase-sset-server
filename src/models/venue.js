import mongoose from "mongoose";


const venueSchema = new mongoose.Schema({
  venueName: {
    type: String,
    required: true,
  },
  venueDescription: {
    type: String,
    required: true,
  },
  location: String,
  amenities: [String],
  images: [String],
});

const Venue = mongoose.model('Venue', venueSchema);


export default Venue;