import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  venueId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Venue",
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reservationDate: {
    type: [Date],
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventType: {
    type: String,
    required: true,
  },
  eventDesc: {
    type: String,
    required: true,
  },
  status:{
    type: String,
    required: true,
    default: "Pending",
  },
  numberOfGuests: Number,
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
