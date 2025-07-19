//app/dashboard/books/page.js
import SimpleBookTable from "@/app/ui/books/booktable"
import {getBooks} from "@/app/lib/data"

export default async function AllBooks(){
    const books = await getBooks();

    
    return(
    <div>
        <p>all books</p>
    <SimpleBookTable books={books}/>
    </div>
);
}