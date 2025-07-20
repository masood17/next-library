// app/page.js
import Link from 'next/link';
import pool from './lib/db';
import EditButton from './ui/shared/editButton';
import SimpleBookTable from './ui/books/booktable';
import {getBooks} from '@/app/lib/data'


export default async function Home() {
    
   

    return (
        <div>
           <p>"Welcome home, John"</p>



                
        </div>
    );
}