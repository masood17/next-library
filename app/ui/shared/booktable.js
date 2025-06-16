'use client'

export default function SimpleBookTable({ books }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b text-left">Title</th>
            <th className="py-2 px-4 border-b text-left">Author</th>
            <th className="py-2 px-4 border-b text-left">Genre</th>
            <th className="py-2 px-4 border-b text-left">Year</th>
            <th className="py-2 px-4 border-b text-left">ISBN</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b">{book.title}</td>
              <td className="py-2 px-4 border-b">{book.author_name}</td>
              <td className="py-2 px-4 border-b">{book.genre_name}</td>
              <td className="py-2 px-4 border-b">{book.publishedYear}</td>
              <td className="py-2 px-4 border-b">{book.isbn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}