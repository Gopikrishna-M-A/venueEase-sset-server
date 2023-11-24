import Reservation from '../models/reservation.js'


// Get all reservations
export const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find().populate('userId').populate('venueId');
    const sortedReservations = reservations.reduce((acc, reservation) => {
      switch (reservation.status) {
        case 'Pending':
          acc.pending.push(reservation);
          break;
        case 'Accepted':
          acc.accepted.push(reservation);
          break;
        case 'Rejected':
          acc.rejected.push(reservation);
          break;
        default:
          // Handle other status values if needed
          break;
      }
      return acc;
    }, { pending: [], accepted: [], rejected: [] });

    const pendingReservations = sortedReservations.pending;
    const acceptedReservations = sortedReservations.accepted;
    const rejectedReservations = sortedReservations.rejected;

    res.status(200).json({pendingReservations,acceptedReservations,rejectedReservations});
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve reservations' });
  }
};

// Create a new reservation
export const createReservation = async (req, res) => {
  const { userId } = req.params;
  const { venueId, reservationDate, eventName, eventType, eventDesc } = req.body;
  try {
    
    const newReservation = new Reservation({
      venueId,
      reservationDate,
      eventName,
      eventType,
      eventDesc,
      userId
    });
    console.log(newReservation);
    await newReservation.save();
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create a reservation' });
  }
};

export const getUserReeservations = async (req, res) => {
  const { userId } = req.params;
  try {
    const reservations = await Reservation.find({userId}).populate('venueId');
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve reservations' });
  }
}

// Get a reservation by ID
export const getReservation = async (req, res) => {
  const { reservationId } = req.params;
  try {
    const reservation = await Reservation.findById(reservationId);
    if (!reservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.status(200).json(reservation);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve the reservation' });
  }
};

// Update a reservation by ID
export const updateReservation = async (req, res) => {
  const { reservationId } = req.params;
  const updatedData = req.body;
  console.log(updatedData, reservationId);
  try {
    const updatedReservation = await Reservation.findByIdAndUpdate(
      reservationId,
      updatedData,
      { new: true }
    );
    if (!updatedReservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.status(200).json(updatedReservation);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update the reservation' });
  }
};

// Delete a reservation by ID
export const deleteReservation = async (req, res) => {
  const { reservationId } = req.params;
  try {
    const deletedReservation = await Reservation.findByIdAndRemove(reservationId);
    if (!deletedReservation) {
      return res.status(404).json({ message: 'Reservation not found' });
    }
    res.status(200).json(deletedReservation);
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete the reservation' });
  }
};



