//app/dashboard/books/page.js
import SimpleBookTable from "@/app/ui/books/booktable"
import { AddBook } from "@/app/ui/books/buttons";
import {getBooks} from "@/app/lib/data"

export default async function AllBooks(){
    const books = await getBooks();

    
    return(
    <div>
        <p>all books</p>
<AddBook/>
    <SimpleBookTable books={books}/>
    </div>
);
}