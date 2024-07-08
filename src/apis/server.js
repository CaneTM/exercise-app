// The "main" file for running the server and utilizing the APIs

import express from 'express';
import cors from 'cors';
import 'dotenv/config'

import userRoute from './UserProfileAPI.js';

const app = express();

app.use(cors());
app.use('/users', userRoute);

const { REACT_APP_SERVER_DOMAIN, REACT_APP_SERVER_PORT } = process.env;

app.listen(REACT_APP_SERVER_PORT, REACT_APP_SERVER_DOMAIN, () => {
    console.log('Server running...');
    // console.log(process.env.REACT_APP_SERVER_DOMAIN);
    // console.log(process.env.REACT_APP_SERVER_PORT);
});
