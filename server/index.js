const express = require('express');
const path = require('path');
const app = express();
console.log(path.join(__dirname, '../dist/angular-test/index.html'))
app.use(express.static(path.join(__dirname, '../dist/angular-test')));

app.all('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/angular-test/index.html'));
})
app.listen(4200, ()=>{
  console.log('http://localhost:4200')
});
