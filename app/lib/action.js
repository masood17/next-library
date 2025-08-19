'use server';

import pool from '@/app/lib/db';



export async function editBook(id, formData){
    console.log(id,formData);
    try {
        const client = await pool.connect();
        
           const book_title_id = id;
        const title= formData.get('title');
        const author_name = formData.get('author');
        const genre_name = formData.get('genre');
        const publisher_name = formData.get('publisher');


    } catch (error) {
        
    }
    
    

}