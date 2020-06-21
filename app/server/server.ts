import 'dotenv/config'
import express from 'express'
import path from 'path'
import routes from './router'

const app = express()

app.use(express.json())
app.use(express.static(path.resolve(__dirname, '../public/assets')))
app.use(routes)

app.listen(process.env.PORT || 3000, () => {
  console.log('Node is listening on port 3000...')
})
