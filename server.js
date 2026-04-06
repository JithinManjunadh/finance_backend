const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = require('./app');

// Load env variables
dotenv.config();


// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB Connected');
  } catch(err) {
    console.error('DB Connection Error:', err.message);
  }
};


// Start server ONLY after DB connects
const startServer = async() => {
  await connectDB();

  const PORT = process.env.PORT;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();