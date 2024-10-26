import pg from 'pg'
const { Pool } = pg


const pool = new Pool({
    host: process.env.SUPABASE_HOST,
    port: process.env.SUPABASE_PORT,
    user: process.env.SUPABASE_USER,
    password: process.env.SUPABASE_PWD,
    database: process.env.SUPABASE_DB
})

console.log('connecting Supabase database', pool.options.database)

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

