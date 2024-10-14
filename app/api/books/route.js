// app/api/books/route.js
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import pool from '../../../lib/db';

export async function POST(request) {
    try {
        const { title, author, genre, description, numberOfVolumes } = await request.json();
        const client = await pool.connect();
        
        try {
            await client.query('BEGIN');
            
            // Insert book
            const bookId = uuidv4();
            await client.query(
                'INSERT INTO books (id, title, author, genre, description) VALUES ($1, $2, $3, $4, $5)',
                [bookId, title, author, genre, description]
            );
            
            // Insert volumes
            for (let i = 0; i < numberOfVolumes; i++) {
                await client.query(
                    'INSERT INTO volumes (book_id, condition, location) VALUES ($1, $2, $3)',
                    [bookId, 'New', 'Main Shelf']
                );
            }
            
            await client.query('COMMIT');
            
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