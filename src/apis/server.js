import express from 'express';
import cors from 'cors';
import 'dotenv/config'

import route1 from './UserProfileAPI.js';

const app = express();

app.use(cors());
app.use('/users', route1);

const { REACT_APP_SERVER_DOMAIN, REACT_APP_SERVER_PORT } = process.env;

app.listen(REACT_APP_SERVER_PORT, REACT_APP_SERVER_DOMAIN, () => {
    console.log('Server running...');
    // console.log(process.env.REACT_APP_SERVER_DOMAIN);
    // console.log(process.env.REACT_APP_SERVER_PORT);
});
