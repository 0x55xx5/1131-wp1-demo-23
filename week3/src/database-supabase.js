import pg from 'pg'
const { Pool } = pg

const pool = new Pool({
    host: 'aws-0-ap-southeast-1.pooler.supabase.com',
    port:'5432',
    user: 'postgres.yvjzzqlmjoisjuzjhffw',
    password: 'wuhnyM-putzun-6vuzro',
    database: 'postgres',
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

