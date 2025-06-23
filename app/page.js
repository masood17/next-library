// app/page.js
import Link from 'next/link';
import pool from './lib/db';
import EditButton from './ui/shared/editButton';
import SimpleBookTable from './ui/shared/booktable';

async function getBooks() {
    const client = await pool.connect();
    try {
        const result = await client.query(
            'SELECT books.*, authors.full_name AS author_name, genres.name AS genre_name FROM books INNER JOIN authors ON books.author_id = authors.author_id INNER JOIN genres ON books.genre_id = genres.genre_id ORDER BY book_id DESC');
        return result.rows;
    } finally {
        client.release();
    }
}

export default async function Home() {
    
    // const books = await getBooks();
   

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Library Catalog</h1>
                <Link href="/dashboard/books/new" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add New Book
                </Link>
            </div>


{/* <SimpleBookTable books={books}/> */}
                
        </div>
    );
}