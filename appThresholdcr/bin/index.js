const express =require('express');
const app =express();
const cors=require('cors');

require('./database');

app.use(cors());
app.use(express.json());

app.use('/api',require('../routes/login'))
app.use('/api',require('../routes/deportes'))
app.use('/api',require('../routes/trainers'))
app.use('/api',require('../routes/atletas'))
app.use('/api',require('../routes/news'))
app.use('/api',require('../routes/class'))
app.use('/api',require('../routes/events'))


app.listen(3000);
console.log("Server on port",3000);