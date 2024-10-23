import express from 'express'
import db from '../utils/dbService.js'
const router = express.Router()
router.get('/', async (req, res) => {
  try {
    const results = await db.query(`select * from blog_post_23`)
    res.json(results.rows)
  } catch (error) {
    console.log(error)
  }
})
export default router
