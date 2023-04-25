
const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000

const categories = require('./data/catagories.json')

app.use(cors());
app.get('/', (req, res) => {
  res.send('Dragon is Coming Sooooooooon bosss........')
})
 app.get('/categories', (req, res)=>{
    res.send(categories);
 })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})