import {PencilIcon} from `@heroicons/react/outline`;
import Link from `next/Link`;




export function UpdateBook(id){
    return (
        <link
        href={`/dashboard/books/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
        >
        <PencilIcon className="w-5" />
        </link>
    );
}