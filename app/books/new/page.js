// app/books/new/page.js
import NewBookForm from './NewBookForm';

export default function NewBookPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Add New Book</h1>
            <NewBookForm />
        </div>
    );
}
