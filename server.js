const express = require('express')
const app = express()
const PORT= process.env.PORT ||2000;
app.use(function(req, res, next){
  if(req.headers['x-forwaded-proto'] =='http'){
    next();
  }else{
    res.redirect('http://' +req.hostname +req.url);
  }
});
app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Website is running on localhost:'+ PORT);
});
