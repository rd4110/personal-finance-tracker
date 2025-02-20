const express = require('express');
const { checkToken } = require('../middlewares');

const {
  signup,
  login,
  profile,
  updatePassword,
  updateProfile,
} = require('../controllers/user-controllers');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
// GET PROFILE
router.get('/profile',checkToken(['USER']), profile);
// Change password
router.put('/change-password', checkToken(['USER']), updatePassword);
// Update profile
router.put('/update-profile', checkToken(['USER']), updateProfile);
module.exports = router;
