import express from 'express';
import cors from 'cors';
import errorMiddleware from './middleware/error.middleware';
import routes from './routes/index';

const app = express();

// parse application/json
app.use(express.json());

// use cors
app.use(cors());

const port = 3001;

// define a route handler for the default home page
app.get('/', (req, res) => {
  res.send('Amon Agri!');
});

// use api routes
app.use('/api/v1/', routes);

// use error middleware
app.use(errorMiddleware);

// define a route handler for wrong routes
app.use((req, res) => {
  res.status(404).send('page is not found');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});