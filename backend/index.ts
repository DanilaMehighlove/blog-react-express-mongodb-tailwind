import express from 'express';
import cors from 'cors';
import { connect } from 'mongoose';

import Routes from './routes/_routes';

const mongodbURL = 'mongodb://localhost:27017/niceblog';

const app = express();
const jsonParser = express.json();

app.use(cors());
app.use(jsonParser);

app.use(Routes);

app.listen(3030, () => {
  console.log('Express server started on port 3030')
  connectToMongoDB();
});

const connectToMongoDB = async () => {
  try {
    await connect(mongodbURL);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}