const express = require('express');
const UserService = require('./UserService');
const router = express.Router();

// Route for /api/users/
router.get('/', async (req, res) => {
  const users = await UserService.findAll(req, res);
  res.json(users);
});

// Route for /api/users/:id
router.get('/:id', (req, res) => {
  // Access dynamic parameters using req.params.id
  res.send(`User profile for ID: ${req.params.id}`);
});

// Handle POST requests to /api/users/
router.post('/', async (req, res) => {
    const user = await UserService.createUser(req, res);
});

// Handle PUT requests to /api/users/
router.put('/:id', async (req, res) => {
    const user = await UserService.updateUser(req, res);
    res.json(user);
});

// Handle DELETE requests to /api/users/
router.delete('/:id', async (req, res) => {
    const user = await UserService.deleteUser(req, res);
    res.json(user);
});

module.exports = router;
