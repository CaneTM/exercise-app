import express from 'express';

const route1 = express.Router();
route1.use(express.json())

route1.post('/', (req, res) => {
    res.json({ "message": 'test' });
});

export default route1;
