import pg from 'pg'
const { Pool } = pg

let pool = new Pool({
  host: 'localhost',
  port: '5432',
  user: 'postgres',
  password: '0000',
  database: 'wp_week05',
})

// console.log('connecting local database', pool.options.database)

// const testDB = async () => {
//     try{
//         const results = await pool.query(`select * from blog_49`)
//         console.log('json data', results.rows)
//     } catch (error) {
//         console.log(error)
//     }
// }

// testDB()

export default pool
