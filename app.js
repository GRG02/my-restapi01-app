const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const body_parser = require('body-parser');

require('dotenv').config()

const pageRoutes = require('./routes/pageRoutes');
const memberRoutes = require('./routes/memberRoutes');

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(body_parser.json())
app.use(express.json())
app.use('/', pageRoutes)
app.use('/api/mem', memberRoutes)

mongoose.connect('mongodb://localhost:27017/dti_test_db').then(
    ()=>{
        console.log('Database connected....');
    },
    (err)=>{
        console.log('Error: Database connected incomplete....');
    }
)

app.listen(PORT,()=>{
    console.log('Server running on port ' + PORT + '...');
})