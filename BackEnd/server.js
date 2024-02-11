import express from 'express'

const app = express()
const port = 3080
app.listen(port)

app.get('/', (req, res)=> {
   res.send(`server running on port ${port}`)
})