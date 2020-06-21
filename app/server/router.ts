import { Router } from 'express'
import path from 'path'

const router = new Router()

router.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, '../public/index.html'))
})

export default router
