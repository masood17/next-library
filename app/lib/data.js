import pool from '@/app/lib/db'


export async function getBooks() {

   let client;
    try {
        client = await pool.connect();
        const result = await client.query(
            `SELECT books.*, authors.full_name AS author_name, genres.name AS genre_name, publishers.name AS publisher_name
            FROM
             books 
            INNER JOIN
             authors ON books.author_id = authors.author_id 
            INNER JOIN
             genres ON books.genre_id = genres.genre_id 
            INNER JOIN
             publishers ON books.publisher_id = publishers.publisher_id
            ORDER BY
             book_id DESC;`);
        
        return result.rows;
    } catch (error) {
        
        console.error('DATABASE ERROR DURING BUILD:', error); // Log the specific error
        // Important: Return an empty array or throw a custom error
        // if you want the page to error out. Returning [] allows it to build.
        return [];
    } finally {
        client.release();
    }
}


export async function fetchBookByID(id){
    let client;
    client = await pool.connect();
    try{
        const result = await client.query(`
            SELECT books.*, authors.full_name AS author_name, genres.name AS genre_name, publishers.name AS publisher_name
            FROM
             books 
            INNER JOIN
             authors ON books.author_id = authors.author_id 
            INNER JOIN
             genres ON books.genre_id = genres.genre_id 
            INNER JOIN
             publishers ON books.publisher_id = publishers.publisher_id
            WHERE books.title_id = $1;
            `, [id]);
    if (result.rows.length > 0) {
      return result.rows[0]; // Return the first (and only) book found
    } else {
      return null; // Return null if no book was found
    }  
    } catch(error){
        console.log('DATABASE ERROR: ', error);
        throw new Error('Failed to fetch book.');
    } finally {
        if(client){
            client.release();
        }
    }
}