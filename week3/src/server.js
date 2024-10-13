import express from 'express';
import  pool from '../src/db.js';
import  supa from '../src/database-supabase.js';


const app = express();
const port = process.env.port|| 5000;

app.get('/api/blogs_23', async (req, res) => {
  try {
      const result = await pool.query('SELECT * FROM blog_post_23');
      console.log("json data: ",result.rows);
      res.json(result.rows);
  }   catch (error) {
      console.log(error);
  }
});

app.get('/api/supa/blogs_23', async (req, res) => {
  try {
      const result = await supa.query('SELECT * FROM blog_post_23');
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



