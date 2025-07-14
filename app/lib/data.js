import pool from '@/app/lib/db'


export async function getBooks() {

   let client;
    try {
        client = await pool.connect();
        const result = await client.query(
            'SELECT books.*, authors.full_name AS author_name, genres.name AS genre_name FROM books INNER JOIN authors ON books.author_id = authors.author_id INNER JOIN genres ON books.genre_id = genres.genre_id ORDER BY book_id DESC');
        console.log("Books data from DB/dummy:", result.rows);
        return result.rows;
    } catch (error) {
        // !!! THIS IS THE CRUCIAL PART !!!
        console.error('DATABASE ERROR DURING BUILD:', error); // Log the specific error
        // Important: Return an empty array or throw a custom error
        // if you want the page to error out. Returning [] allows it to build.
        return [];
    } finally {
        client.release();
    }
}