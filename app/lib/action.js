'use server';

import pool from '@/app/lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';



export async function editBook(id, formData){
    
    console.log(id,formData);

    const client = await pool.connect();

    try {
        
        await client.query('BEGIN');

        //    const book_title_id = id;
        const title= formData.get('title');
        const author_name = formData.get('author');
        const genre_name = formData.get('genre');
        const publisher_name = formData.get('publisher');

        const existingBook = await client.query('SELECT * FROM books WHERE title_id = $1', [id]);

        if(existingBook.rowCount === 0){
            throw new Error('Book not found');
        }

         // 1. Helper function to get or create an entity
       const getOrCreateEntityId = async (tableName, name, idColumnName, columnName) => {
        if (!name) return null;

       const result = await client.query(`SELECT ${idColumnName} FROM ${tableName} WHERE ${columnName} = $1`, [name]);
       if (result.rowCount > 0) {
        return result.rows[0][idColumnName]; // Use the dynamic column name
       } else {
        const insertResult = await client.query(`INSERT INTO ${tableName} (${columnName}) VALUES ($1) RETURNING ${idColumnName}`, [name]);
        return insertResult.rows[0][idColumnName];
       }
    };

     // 2. Get or create the IDs for author, genre, and publisher
        // Pass the correct ID column name for each table
        const authorId = await getOrCreateEntityId('authors', author_name, 'author_id', 'full_name');
        const genreId = await getOrCreateEntityId('genres', genre_name, 'genre_id', 'name');
        const publisherId = await getOrCreateEntityId('publishers', publisher_name, 'publisher_id', 'name');

                // 3. Update the book record
        const updateBookQuery = `
            UPDATE books
            SET 
                title = $1,
                author_id = $2,
                genre_id = $3,
                publisher_id = $4
            WHERE title_id = $5
        `;

        const updateBookValues = [title, authorId, genreId, publisherId, id];
        await client.query(updateBookQuery, updateBookValues);

        await client.query('COMMIT'); // Commit the transaction
        console.log(`Successfully updated book with ID: ${id}`);
        revalidatePath('/dashboard/books');
        redirect('/dashboard/books');
        return { success: true, message: 'Book updated successfully.' };
      


    } catch (error) {
                await client.query('ROLLBACK'); // Rollback the transaction on error
        console.error('Error in editBook:', error.message);
        throw error; // Re-throw the error
        
    } finally{
               client.release(); // Always release the client back to the pool
    }
    
    

}