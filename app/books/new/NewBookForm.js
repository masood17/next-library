// app/books/new/NewBookForm.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewBookForm() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        description: '',
        numberOfVolumes: 1
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/books', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                router.push('/');
                router.refresh();
            }
        } catch (error) {
            console.error('Error adding book:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>
            <div>
                <label htmlFor="author" className="block text-sm font-medium text-gray-700">
                    Author
                </label>
                <input
                    type="text"
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({...formData, author: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                />
            </div>
            <div>
                <label htmlFor="genre" className="block text-sm font-medium text-gray-700">
                    Genre
                </label>
                <select
                    id="genre"
                    value={formData.genre}
                    onChange={(e) => setFormData({...formData, genre: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                >
                    <option value="">Select a genre</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Biography">Biography</option>
                </select>
            </div>
            <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                    Description
                </label>
                <textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="volumes" className="block text-sm font-medium text-gray-700">
                    Number of Volumes
                </label>
                <input
                    type="number"
                    id="volumes"
                    min="1"
                    value={formData.numberOfVolumes}
                    onChange={(e) => setFormData({...formData, numberOfVolumes: parseInt(e.target.value)})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add Book
            </button>
        </form>
    );
}