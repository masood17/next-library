// app/page.js
import Link from 'next/link';
import pool from './lib/db';
import EditButton from './ui/shared/editButton';
import SimpleBookTable from './ui/books/booktable';
import {getBooks} from '@/app/lib/data'


export default async function Home() {
    
    const books = await getBooks();
     console.log("Is books an array?", Array.isArray(books));
   

    return (
        <div>
            {/* <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Library Catalog</h1>
                <Link href="/dashboard/books/new" 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Add New Book
                </Link>
            </div> */}


<SimpleBookTable books={books}/>
                
        </div>
    );
}