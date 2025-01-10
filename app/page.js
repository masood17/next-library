// app/page.js
import Link from 'next/link';
import pool from '../lib/db';

async function getBooks() {
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT * FROM books ORDER BY book_id DESC');
        return result.rows;
    } finally {
        client.release();
    }
}

export default async function Home() {
    const books = await getBooks();
    
    

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Library Catalog</h1>
                <Link href="/books/new" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add New Book
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {books.map((book) => (
                    <div key={book.book_id} className="bg-white p-4 rounded-lg shadow">
                        <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
                        <p className="text-gray-600">By {book.author_id}</p>
                        <p className="text-gray-500 mb-2">Genre: {book.genre_id}</p>
                        <div className="flex justify-between mt-4">
                            <Link href={`/books/${book.id}`}
                                className="text-blue-500 hover:text-blue-700">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}