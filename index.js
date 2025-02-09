import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(express.json());
app.use(express.static('frontend/dist/xurgess-dot-com/browser'));
app.use(bodyParser.json());

const allowedOrigins = ['http://localhost:8080', 'https://xurgess.com'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified origin.';
      console.error(msg, origin);
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

import routes from './backend/routes.js';
app.use('/api', routes);

// Server listening setup
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });