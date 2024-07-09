import { Router, Request, Response } from 'express'
import { pool } from '../../infrastructure/database/db'

const router = Router()

router.get('/', async (req: Request, res: Response) => {
  try {
    await pool.query('SELECT 1')
    res.status(200).send('OK')
  } catch (error) {
    console.error(error)
    res.status(500).send('Server connection failed')
  }
})

export { router }
