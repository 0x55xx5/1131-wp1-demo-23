import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({ 
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'password',
    database: 'cyf_wp01_demo_23', 
});
const queryTest = async () => {
  
    try {
        const result = await pool.query('SELECT * FROM blog_posts_23');
        console.log("json data: ",result.rows);
    }   catch (error) {
        console.log(error);
    }

};
export default pool;

