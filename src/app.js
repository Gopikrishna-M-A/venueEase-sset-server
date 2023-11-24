import express from 'express';
import './config.js';
import bodyParser from 'body-parser';
import cors from 'cors';

import userRoutes from './routes/user.js'; 
import venueRoutes from './routes/venue.js'; 
import reservationRoutes from './routes/reservation.js'; 


const app = express();

const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  Headers: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
}; 

app.use(cors(corsOptions));


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/user',userRoutes)
app.use('/api/venues',venueRoutes)
app.use('/api/reservations',reservationRoutes)



const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) => {
  if (err) {
    console.error('Error starting the server:', err);
  } else {
    console.log(`Server started on port ${PORT}`);
  }
});


