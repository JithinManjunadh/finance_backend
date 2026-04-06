const FinanceRecord = require('../models/FinanceRecord');
const wrapAsync = require('../utils/wrapAsync');

// SUMMARY
exports.getSummary = wrapAsync(async (req, res) => {
  const result = await FinanceRecord.aggregate([
    {
      $group: {
        _id: '$type',
        total: { $sum: '$amount' }
      }
    }
  ]);

  let income = 0;
  let expense = 0;

  result.forEach(item => {
    if (item._id === 'income') income = item.total;
    if (item._id === 'expense') expense = item.total;
  });

  res.status(200).json({
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense
  });
});

// CATEGORY TOTALS
exports.getCategoryTotals = wrapAsync(async (req, res) => {
  const result = await FinanceRecord.aggregate([
    {
      $group: {
        _id: '$category',
        total: { $sum: '$amount' }
      }
    }
  ]);

  res.status(200).json(result);
});

// RECENT TRANSACTIONS
exports.getRecentTransactions = wrapAsync(async (req, res) => {
  const records = await FinanceRecord.find()
    .sort('-createdAt')
    .limit(5);

  res.status(200).json(records);
});