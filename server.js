const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect DB
connectDB();

// INIT Middleware that allows us to get req JSON data via (req.body)
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API Running');
});

// routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));

// Declare the port, if no environment port so it is 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started on port :' + PORT);
});
