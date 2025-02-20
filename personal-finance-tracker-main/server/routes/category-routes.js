const express = require('express');
const { checkToken } = require('../middlewares');

const {
  getCategory,
  postCategory,
  getCategoryById,
  deleteCategory,
  updateCategory,
} = require('../controllers/category-controllers');

const router = express.Router();

// Apply to all routes
// router.use(checkToken);

// Check Token for simple 'USER' ...
router.get('/', checkToken(['USER']), getCategory);
router.post('/', checkToken(['USER']), postCategory);
// router.get('/:id', getCategoryById);
router.delete('/delete/:id', checkToken(['USER']), deleteCategory);
router.put('/update/:id', checkToken(['USER']), updateCategory);

module.exports = router;
