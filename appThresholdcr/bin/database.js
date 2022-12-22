const mongoose = require("mongoose");
require('dotenv').config({ path: '.env' })
const user ='Thresholdcr';
const password='AzSGrTmJdcf4iGzd';
const dbname='Thresholdcr';
const uri=`mongodb+srv://Thresholdcr:${password}@cluster0.asxvgkf.mongodb.net/${dbname}?retryWrites=true&w=majority`;

//`mongodb+srv://${user}:${password}@cluster0.lwdzfw7.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
mongoose
  .connect(uri,{useUnifiedTopology:true})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Could not connect to MongoDB", err);
  });