const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config(); // call env variables inside node application

// middlewares
app.use(cors()); 
app.use(express.json()); // will allow us to pass json payloads form frontend to backend
app.use(express.urlencoded()); // this is a built in middleware function in express

// root routes
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}` ));