import express from 'express';
import { db } from './db.js';


const app = express();
const port = process.env.port|| 5000;

app.get('/api/blogs_23', async (req, res) => {
  try {
      const result = await db.query('SELECT * FROM blog_posts_23');
      console.log("json data: ",result.rows);
      res.json(result.rows);
  }   catch (error) {
      console.log(error);
  }
});

app.get('/', (req, res) => {
    res.send('Hello World \r\n</br>912410023 kevin');
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});



