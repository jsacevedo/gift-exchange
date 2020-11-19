const router = require('express').Router();
const asyncHandler = require('express-async-handler');

let User = require('../models/user.model');

router.post(
  '/add',
  asyncHandler(async (req, res, next) => {
    const { firstName, lastName, email } = req.body;

    const user = new User({
      firstName,
      lastName,
      email,
    });

    const newUser = await user.save();

    res.json(newUser);
  })
);

router.get(
  '/',
  asyncHandler(async (req, res, next) => {
    const allUsers = await User.find({});

    res.json(allUsers);
  })
);

router.get(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const user = await User.findById(req.params.id);

    res.json(user);
  })
);

router.delete(
  '/:id',
  asyncHandler(async (req, res, next) => {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    res.json(`Deleted User: ${deletedUser}`.cyan.bold);
  })
);

module.exports = router;
