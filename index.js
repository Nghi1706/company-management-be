const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const {Pool} = require('pg')
const pool = new Pool({
  user: 'u74957ldi9184f',
  host: 'ceu9lmqblp8t3q.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com',
  database: 'ddmukv3jkbfk5m',
  password: 'p5c54ece6752c340149e5ca9b82d4c7f5bc7244d3615afe8345454128d68ccfb6',
  port: 5432,
  ssl: true,
})
const client =  pool.connect()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.listen(port, () => {
console.log(`App running on port ${port}.`)
})

pool.query('SELECT name FROM public.testt;', (err, result) => 
{ if (err) { console.error('Error executing query:', err); } 
else { console.log('Query result:', result.rows); } });


// const data =  pool.query('SELECT name FROM testt;')

// // const getUsers = async (request, response) => {
// //     client.query('SELECT name FROM testt;', (error, results) => {
// //       if (error) {
// //         throw error
// //       }
// //       response.status(200).json(results.rows)
// //     })
// //   }
// // app.get('/users', getUsers)
// console.log(data)