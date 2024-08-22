// This defines the endpoints needed to create, retrieve, update, or delete a user's data

import express from 'express';
import users from '../test-data/users.js';

const userRoute = express.Router();
userRoute.use(express.json())

// Get the info of the user with the given username
userRoute.get('/:username', (req, res) => {
    const { username } = req.params;

    if (users[username]) {
        res.json(users[username]);
    } else {
        res.status(404).json("Cannot find user with username " + username);
    }
});

// Create a new user
// This uses a POST request
userRoute.post('/:username', (req, res) => {

});

// Update a user's info
userRoute.put('/:username', (req, res) => {

});

// Delete a user
userRoute.delete('/:username', (req, res) => {

});

export default userRoute;
