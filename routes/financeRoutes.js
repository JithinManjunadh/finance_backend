const express = require('express');
const { createRecord, getRecords, getRecordById, updateRecord, deleteRecord} = require('../controllers/financeController');
const { protect } = require('../middleware/authMiddleware');
const { authorize } = require('../middleware/roleMiddleware');
const { createFinanceSchema, updateFinanceSchema } = require('../utils/validators');
const validate = require('../middleware/validate');

const router = express.Router();

router.route('/')
   .get(protect, authorize('viewer', 'analyst', 'admin'), getRecords) // Viewer + Analyst + Admin can READ
   .post(protect, authorize('admin'), validate(createFinanceSchema), createRecord); //only Admin can CREATE

router.route('/:id')
  .get(protect, authorize('admin', 'analyst', 'viewer'), getRecordById) //one record can be READ by all roles
  .patch(protect, authorize('admin'), validate(updateFinanceSchema), updateRecord) //only Admin can UPDATE
  .delete(protect, authorize('admin'), deleteRecord); //only Admin can DELETE


module.exports = router;