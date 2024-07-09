import express from 'express'
import { router as healthRouter } from './application/services/health'

const app = express()
const port = process.env.PORT || 3000

app.use('/health', healthRouter)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
