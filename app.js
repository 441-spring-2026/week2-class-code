const express = require('express')
const app = express()
const port = 3001

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

// A POST request handler
// curl --request http://localhost:3001
app.post('/', (req, res) => {
  res.send('post request received')
})

app.get('/year/:id', (req, res) => {
  const year = req.params.id;
  const data = salmonHarvests[year];
  if(!data){
    res.send("No data for that year, try again")
  }else{
    res.send(data);
  }
})

app.get('/total/:year', (req, res) => {
  const year = req.params.year;
  const data = salmonHarvests[year];
  if(!data){
    res.send("No data for that year, try again")
  }else{
    const total = data.coho + data.chinook;
    // Express automatically formats Object responses as JSON
    // https://expressjs.com/en/5x/api.html#res.send
    res.json({"total": total});
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
