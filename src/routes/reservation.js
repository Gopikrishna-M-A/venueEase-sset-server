import express from 'express';
import { getReservations, getUserReeservations, createReservation, getReservation, updateReservation, deleteReservation }  from '../controllers/reservation.js';
const router = express.Router();

router.get("/", getReservations)
router.post("/:userId", createReservation)
router.get("/:userId", getUserReeservations)
router.get("/:reservationId", getReservation)
router.patch("/:reservationId", updateReservation)
router.delete("/:reservationId", deleteReservation)

export default router;


