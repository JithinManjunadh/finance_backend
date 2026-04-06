const FinanceRecord = require('../models/FinanceRecord');
const wrapAsync = require('../utils/wrapAsync');

// CREATE (Admin only via route)
exports.createRecord = wrapAsync(async (req, res) => {
  const record = await FinanceRecord.create(req.body);

  res.status(201).json(record);
});


// GET ALL (System-wide data)
exports.getRecords = wrapAsync(async (req, res) => {
  let query = {};

  if (req.query.type) query.type = req.query.type;
  if (req.query.category) query.category = req.query.category;

  const records = await FinanceRecord.find(query).sort('-createdAt');

  res.status(200).json({
    count: records.length,
    data: records
  });
});

// GET ONE Record
exports.getRecordById = wrapAsync(async (req, res) => {
  const record = await FinanceRecord.findById(req.params.id);

  if (!record) {
    res.status(404);
    throw new Error('Record not found');
  }

  res.status(200).json(record);
});

// UPDATE (Admin only)
exports.updateRecord = wrapAsync(async (req, res) => {
  const record = await FinanceRecord.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true, runValidators: true }
  );

  if (!record) {
    res.status(404);
    throw new Error('Record not found');
  }

  res.status(200).json(record);
});

// DELETE (Admin only)
exports.deleteRecord = wrapAsync(async (req, res) => {
  const record = await FinanceRecord.findByIdAndDelete(req.params.id);

  if (!record) {
    res.status(404);
    throw new Error('Record not found');
  }

  res.status(200).json({ message: 'Deleted successfully' });
});