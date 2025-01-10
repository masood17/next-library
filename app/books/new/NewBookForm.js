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
        publisher: '',
        publicationEdition: 1,
        numberOfVolumes: 1,
        shelfLocation: 0
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            
            console.log("i was tapped");
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
                    <option value="التاريخ">التاريخ</option>
                    <option value="التراجم">التراجم</option>
                    <option value="التشيع">التشيع</option>
                    <option value="التصوف">التصوف</option>
                    <option value="التفسير">التفسير</option>
                    <option value="الصحاح (الحديث)">الصحاح (الحديث)</option>
                    <option value="التخريج (الحديث)">التخريج (الحديث)</option>
                    <option value="المعاجم (الحديث)">المعاجم (الحديث)</option>
                    <option value="المسانيد (الحديث)">المسانيد (الحديث)</option>
                    <option value="المصنفات (الحديث)">المصنفات (الحديث)</option>
                    <option value="الموضوعات (الحديث)">الموضوعات (الحديث)</option>
                    <option value="السنن (الحديث)">السنن (الحديث)</option>
                    <option value="الزوائد (الحديث)">الزوائد (الحديث)</option>
                    <option value="الفهارس (الحديث)">الفهارس (الحديث)</option>
                    <option value="الاحكام (الحديث)">الاحكام (الحديث)</option>
                    <option value="الفضائل (الحديث)">الفضائل (الحديث)</option>
                    <option value="العلل (الحديث)">العلل (الحديث)</option>
                    <option value="الصحاح الستة (الحديث)">الصحاح الستة (الحديث)</option>
                    <option value="الموطآت (الحديث)">الموطآت (الحديث)</option>
                    <option value="الرجال">الرجال</option>
                    <option value="الرسائل">الرسائل</option>
                    <option value="الطبقات">الطبقات</option>
                    <option value="الفتاوى">الفتاوى</option>
                    <option value="الفقه الحنبلي">الفقه الحنبلي</option>
                    <option value="الفقه الحنفي">الفقه الحنفي</option>
                    <option value="الفقه الشافعي">الفقه الشافعي</option>
                    <option value="الفقه المالكي">الفقه المالكي</option>
                    <option value="الفقه المقارن">الفقه المقارن</option>
                    <option value="اللغة">اللغة</option>
                    <option value="فهارس المخطوطات">فهارس المخطوطات</option>
                    <option value="المعاملات المالية">المعاملات المالية</option>
                    <option value="علم الكلام">علم الكلام</option>
                    <option value="علوم القرآن">علوم القرآن</option>
                    <option value="علوم الحديث">علوم الحديث</option>
                    <option value="القراءات">القراءات</option>
                    <option value="القواميس">القواميس</option>
                    <option value="الاحوال الشخصية">الاحوال الشخصية</option>
                    <option value="الميراث">الميراث</option>
                    <option value="النكاح">النكاح</option>
                </select>
            </div>
            <div>
                <label htmlFor="publisher" className="block text-sm font-medium text-gray-700">
                    Publisher
                </label>
                <input
                    id="publisher"
                    value={formData.publisher}
                    onChange={(e) => setFormData({...formData, publisher: e.target.value})}
                    
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
            </div>
            <div>
                <label htmlFor="publicationNo" className="block text-sm font-medium text-gray-700">
                    Publication Edition
                </label>
                <input
                    type="number"
                    id="publicationNo"
                    // min="1"
                    value={formData.publicationEdition}
                    onChange={(e) => setFormData({...formData, publicationEdition: parseInt(e.target.value)})}
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
            <div>
                <label htmlFor="shelfLocation" className="block text-sm font-medium text-gray-700">
                    Shelf Location
                </label>
                <input
                    type="number"
                    id="shelfLocation"
                    
                    value={formData.shelfLocation}
                    onChange={(e) => setFormData({...formData, shelfLocation: parseInt(e.target.value)})}
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