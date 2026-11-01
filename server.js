require('dotenv').config();
const mongodb = require("./app/db/mongodb");
const routes = require("./app/routes");

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5008;


app.use(express.json());

// connect to MongoDB
mongodb();

app.get('/', (req, res) => {
  res.json(`Server is running smoothly`);
});
app.use('/api', routes);
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})