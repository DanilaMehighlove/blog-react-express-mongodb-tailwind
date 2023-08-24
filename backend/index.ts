import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';
const niceBlogNameDB = 'niceblog';

const client = new MongoClient(url);
const niceBlogDB = client.db(niceBlogNameDB);

const app = express();

app.use(cors());

app.get('/articles', async (req, res) => {
  const blogCollection = niceBlogDB.collection('article');
  const articles = await blogCollection.find().toArray();
  res.json(articles);
});

app.listen(3030, () => {
  console.log("Express server started on port 3030");
});