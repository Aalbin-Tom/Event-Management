const express = require("express");
// require('dotenv').config()
const connectDB = require("./db/connection");
const userRotes = require('./routes/userRoutes');
const morgan = require('morgan')
const cors = require('cors');
const { notFound, errorHandler } = require("./Middlewears/errorhandling");


const PORT = 3001;

const app = express();
connectDB();
app.use(express.json())

app.use(morgan('dev'))
app.use(cors())




app.use('/', userRotes)



app.use(notFound)
app.use(errorHandler)


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
