const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

const {getAllUsers, createUser, updateUser, deleteUser} = require('../controllers/userController');

const router = express.Router();

// Admin-only routes
router.route('/')
  .get(protect, authorize('admin'), getAllUsers)
  .post(protect, authorize('admin'), createUser);

router.route('/:id')
  .patch(updateUser)
  .delete(deleteUser);

module.exports = router;