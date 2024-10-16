import express from 'express'
import logger from 'morgan'
import cors from 'cors'
const app = express()

import db from './utils/dbService.js'
import apiblogRo from './routers/apiblogRouter.js'
import pool from './utils/database-supabase.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'))
app.use(cors())
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use('/blog_23', async (req, res) => {
  try {
    const results = await db.query(`select * from blog_post_23`)
    res.render('blog_xx', { blogs: results.rows, myInfo: 'kkk,912410023' })
  } catch (error) {
    console.log(error)
  }
})

app.get('/api/supa/blog_23', async (req, res) => {
  try {
    const results = await pool.query(`select * from blog_post_23`)
    res.json(results.rows)
  } catch (error) {
    console.log(error)
  }
})
app.use('/api/blog_23', apiblogRo)

app.use('/', (req, res, next) => {
  res.send('kkkk, 912410023')
})

const port = process.env.PORT || 3000
/*app.listen(port, () => {
  console.log(`server running on port ${port}`)
})*/
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`)
})
