// app/api/books/route.js
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import pool from '../../lib/db';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/dist/server/api-utils';

export async function POST(request) {
    try {
        const { title, author, genre, publisher,publicationEdition, numberOfVolumes, shelfLocation } = await request.json();
        const client = await pool.connect();
        
        try {
            await client.query('BEGIN');

            //check if author exists
            const authorResult = await client.query(`
                SELECT author_id FROM authors
                WHERE full_name = $1
                
            `, [author]);

            
            let authorId;
            //assign id to consts
            if (authorResult.rows.length > 0) {
                authorId = authorResult.rows[0].author_id;
            } else {
                // If no rows were found, insert author and get author's ID
                const insertAuthor = await client.query(
                    'INSERT INTO authors (full_name) VALUES ($1) returning author_id',
                    [author]
                );
                authorId = insertAuthor.rows[0].author_id;
            }


            // genre query 
            let genreId
            const queriedGenreId = await client.query(
                'SELECT genre_id FROM genres WHERE name = $1',
                [genre]
            );

            genreId = queriedGenreId.rows[0].genre_id;

            // publisher query

                      //check if data exist
                      const publisherResult = await client.query(`
                        SELECT publisher_id FROM publishers 
                        WHERE name = $1
                        
                        
                    `, [publisher]);
        
                    
                    let publisherId;
                    //assign id to consts
                    if (publisherResult.rows.length > 0) {
                        publisherId = publisherResult.rows[0].publisher_id;
                    } else {
                        // insert publisher's ID
                        const insertPublisher = await client.query(
                            'INSERT INTO publishers (name) VALUES ($1) returning publisher_id',
                            [publisher]
                        );
                        publisherId = insertPublisher.rows[0].publisher_id;
                    }
            // Insert book
            const titleId = uuidv4();
            // await client.query(
            //     'INSERT INTO books ( title, author_id, genre_id, publisher_id, title_id) VALUES ($1, $2, $3, $4, $5)',
            //     [ title, authorId, genreId, publisherId, titleId]
            // );
            
            // Insert volumes
            // for (let i = 0; i < numberOfVolumes; i++) {
            //     await client.query(
            //         'INSERT INTO volumes (book_id, condition, location) VALUES ($1, $2, $3)',
            //         [bookId, 'New', 'Main Shelf']
            //     );
            // }

            // Insert books for each volume with incrementing shelf locations
            const bookInsertPromises = Array.from({ length: numberOfVolumes }, (_, index) => {
                const volumeNumber = index + 1;
                            // const volumeTitle = numberOfVolumes > 1 ? `${title} (Volume ${volumeNumber})` : title;
                            const currentShelfLocation = parseInt(shelfLocation) + index;
                            
                            return client.query(
                                'INSERT INTO books (title, author_id, genre_id, publisher_id, publication_edition, title_id, volume_num, shelf_location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
                                [title, authorId, genreId, publisherId, publicationEdition, titleId, volumeNumber, currentShelfLocation]
                            );
                        });

                        await Promise.all(bookInsertPromises);

            await client.query('COMMIT');

            revalidatePath('/dashboard/books');

            return NextResponse.json({ message: 'Book added successfully' }, { status: 201 });
        } catch (error) {
            await client.query('ROLLBACK');
            throw error;
        } finally {
            client.release();

        }
    } catch (error) {
        console.error('Error adding book:', error);
        return NextResponse.json({ error: 'Error adding book' }, { status: 500 });
    }


}

export async function GET() {
    try {
        const client = await pool.connect();
        const result = await client.query('SELECT * FROM books ORDER BY created_at DESC');
        client.release();
        
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error('Error fetching books:', error);
        return NextResponse.json({ error: 'Error fetching books' }, { status: 500 });
    }
}

