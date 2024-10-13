import pg from 'pg';
const { Pool } = pg;

const pool = new Pool({ 
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '1234',
    database: 'test', 
});
const queryTest = async () => {
  
    try {
        const result = await pool.query('SELECT * FROM blog_post_23');
        console.log("json data: ",result.rows);
    }   catch (error) {
        console.log(error);
    }

};
queryTest();
export default pool;

