const express = require('express')
const app = express()
const PORT= process.env.PORT ||2000;
app.use(function(req, res, next){
next();
});
app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Website is running on localhost:'+ PORT);
});
