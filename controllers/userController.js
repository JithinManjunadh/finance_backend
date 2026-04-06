const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    res.status(200).json({
      count: users.length,
      data: users
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};