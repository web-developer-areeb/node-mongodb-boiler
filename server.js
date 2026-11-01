require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5008;


app.use(express.json());

app.get('/', (req, res) => {
  res.json(`Server is running smoothly`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})