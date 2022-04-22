const express = require('express');
const userRouter = require('./router/userRoutes.js');
const mongodb = require('./utils/db.js');

require('dotenv').config();
const app = express();
app.use(express.json());

//Starting the database connection
mongodb();

app.use('/user', userRouter);

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});