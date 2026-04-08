const express = require('express')
const app = express()
const port = 3000

const salmonHarvests ={
  "2017": {coho: 501392, chinook: 403115},
  "2018": {coho: 340573, chinook: 387199},
  "2019": {coho: 312405, chinook:  315566}
}

// Run with 'node app.js'
// See output with curl (in new terminal tab) or browser at http://localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/salmon/:year', (req, res) => {
  res.send(salmonHarvests[req.params.year])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})