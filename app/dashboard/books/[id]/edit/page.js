// app/api/books/[id]/edit/page.js
import {fetchBookByID} from '@/app/lib/data';
import EditBookForm from '@/app/ui/books/editBookForm';


export default async function Page(props){
    const params = await props.params;
    const id = params.id
    // console.log(id);
    const book = await fetchBookByID(id);
    // console.log(book);
    
    return (

   <div>
     <p>update Page</p>
    <EditBookForm book = {book}/>
   </div>
);
}