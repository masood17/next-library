'use client';
import { PencilSquareIcon } from "@heroicons/react/24/outline";

export default function EditButton({ bookId }) {  // Add bookId prop
    const handleEdit = async () => {  // Changed to arrow function
        console.log(bookId);
        try {
            
            
            await PUT(bookId);  // Use the bookId prop
            // Add any success handling here
           
            
        } catch (error) {
            console.error('Error editing book:', error);
            // Add any error handling here
        }
    }

    return (
        <div>
            <button
                onClick={() => handleEdit()}  // Changed to arrow function call
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                <PencilSquareIcon className="h-6 w-6 text-gray-500" />
            </button> 
        </div>
    )
}