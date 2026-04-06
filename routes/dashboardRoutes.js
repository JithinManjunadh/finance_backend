const express = require('express');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');

const { getSummary, getCategoryTotals,getRecentTransactions } = require('../controllers/dashboardController');

const router = express.Router();

router.get('/summary', protect, authorize('viewer', 'analyst', 'admin'), getSummary); // Viewer + Analyst + Admin

router.get('/categories', protect, authorize('analyst', 'admin'), getCategoryTotals);

router.get('/recent', protect, authorize('analyst', 'admin'), getRecentTransactions);

module.exports = router;