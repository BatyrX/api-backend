const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(express.static('../front'));

app.post('/api/:method', async (req, res) => {
    const { idInstance, apiTokenInstance } = req.body;
    const { method } = req.params;
    const url = `https://7103.api.greenapi.com/waInstance${idInstance}/${method}/${apiTokenInstance}`;

    try {
        const response = await axios.post(url, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(error.response.status).json(error.response.data);
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
