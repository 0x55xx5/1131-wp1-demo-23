import pg from 'pg'
const { Pool } = pg
let pool
console.log(process.env.SUPABASE_HOST)
if (process.env.DATABASE == 'LOCAL') {
  pool = new Pool({
    host: 'localhost',
    port: '5432',
    user: 'postgres',
    password: '1234',
    database: 'test',
  })
} else {
  pool = new Pool({
    host: process.env.SUPABASE_HOST,
    port: process.env.SUPABASE_PORT,
    user: process.env.SUPABASE_USER,
    password: process.env.SUPABASE_PWD,
    database: process.env.SUPABASE_DB,
  })
  console.log('supabase connected??')
}

export default pool
