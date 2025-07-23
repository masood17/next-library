
import { PencilIcon } from '@heroicons/react/24/outline';

import Link from 'next/link';




export function UpdateBook({id}){
  
  
    return (
        <Link
        href={`/dashboard/books/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
        >
        <PencilIcon className="w-5 scale-x-[-1]" />
        </Link>
    );
}

export function AddBook(){
  return(
    <Link
    href={`/dashboard/books/new`}
    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full object-right'
    >
    Add Book
    </Link>
  )
}