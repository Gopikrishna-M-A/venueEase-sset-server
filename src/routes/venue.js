import express from 'express';
import { getVenues, createVenue, getVenue, updateVenue, deleteVenue }  from '../controllers/venue.js';
const router = express.Router();

router.get("/", getVenues)
router.post("/", createVenue)
router.get("/:venueId", getVenue)
router.patch("/:venueId", updateVenue)
router.delete("/:venueId", deleteVenue )

export default router;


