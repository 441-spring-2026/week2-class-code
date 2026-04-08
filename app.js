const express = require('express')
const app = express()
const port = 3000

// Run with 'node app.js'
// See output with curl (in new terminal tab) or browser at http://localhost:3000/
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})