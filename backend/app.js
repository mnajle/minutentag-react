import express from 'express'
import cors from 'cors'
import api from "./src/api.js"

const app = express()
const port = 3000


app.use(cors())
app.use("/api", api)
app.listen(port, () => {
  console.log(`App ready on port: ${port}`)
})
