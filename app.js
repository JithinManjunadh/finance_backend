const express = require('express');
const authRoutes = require('./routes/authRoutes');
const financeRoutes = require('./routes/financeRoutes');
const userRoutes = require('./routes/userRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');


const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/finance', financeRoutes);
app.use('/api/users', userRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.use(errorHandler);

//test
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });


module.exports = app;