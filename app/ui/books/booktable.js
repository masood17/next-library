'use client'
import { UpdateBook } from "./buttons";

export default function SimpleBookTable({ books }) {
  return (
    <div className="overflow-x-auto">
      <table dir="rtl" className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b text-center">Title</th>
            <th className="py-2 px-4 border-b text-center">Author</th>
            <th className="py-2 px-4 border-b text-center">Genre</th>
            <th className="py-2 px-4 border-b text-center">Publisher</th>
            <th className="py-2 px-4 border-b text-center">ISBN</th>
            <th className="py-2 px-4 border-b text-center"></th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.book_id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{book.title}</td>
              <td className="py-2 px-4 border-b">{book.author_name}</td>
              <td className="py-2 px-4 border-b">{book.genre_name}</td>
              <td className="py-2 px-4 border-b">{book.publisher_name}</td>
              <td className="py-2 px-4 border-b">{book.isbn}</td>
              <td className="py-2 px-4 border-b"><UpdateBook id = {book.book_id}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}