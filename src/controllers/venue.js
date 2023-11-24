import Venue from '../models/venue.js'


// Get all Venues
export const getVenues = async (req, res) => {
  try {
    const venues = await Venue.find();
    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve venues' });
  }
};

// Create a new Venue
export const createVenue = async (req, res) => {
  const venue = req.body;
  try {
    const newVenue = new Venue(venue);
    await newVenue.save();
    res.status(201).json(newVenue);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create a Venue' });
  }
};

// Get a Venue by ID
export const getVenue = async (req, res) => {
  const { venueId } = req.params;
  try {
    const newVenue = await Venue.findById(venueId);
    if (!newVenue) {
      return res.status(404).json({ message: 'Venue not found' });
    }
    res.status(200).json(newVenue);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve the Venue' });
  }
};

// Update a Venue by ID
export const updateVenue = async (req, res) => {
  const { venueId } = req.params;
  const updatedData = req.body;
  try {
    const updatedVenue = await Venue.findByIdAndUpdate(
      venueId,
      updatedData,
      { new: true }
    );
    if (!updatedVenue) {
      return res.status(404).json({ message: 'Venue not found' });
    }
    res.status(200).json(updatedVenue);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update the Venue' });
  }
};

// Delete a Venue by ID
export const deleteVenue = async (req, res) => {
  const { venueId } = req.params;
  try {
    const deletedVenue = await Venue.findByIdAndRemove(venueId);
    if (!deletedVenue) {
      return res.status(404).json({ message: 'Venue not found' });
    }
    res.status(200).json(deletedVenue);
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete the Venue' });
  }
};



