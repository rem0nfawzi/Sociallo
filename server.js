const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// connect DB
connectDB();

// INIT Middleware that allows us to get req JSON data via (req.body)
app.use(express.json({ extended: false }));

// routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/post'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Declare the port, if no environment port so it is 5000
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('Server started on port :' + PORT);
});
