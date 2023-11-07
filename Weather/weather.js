const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;



app.use(cors());

const mockWeatherData = require('./weather_data.json');


app.get('/weather/:city', (req, res) => {
    const city = req.params.city;
    const weather = mockWeatherData[city];
    if (weather) {
        res.json(weather);
    } else {
        res.status(404).json({ error: 'City not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
