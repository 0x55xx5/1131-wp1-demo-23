import express from 'express';
const app = express();
const port = process.env.port|| 5000;
app.get('/', (req, res) => {
    res.send('Hello World \r\n</br>912410023 kevin');
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

