'use client';

import Link from 'next/link';
import {editBook} from '@/app/lib/action';

export default function EditBookForm({book}){

const editBookWithId = editBook.bind(null, book.title_id);
    // console.log(book);
    
    return(
<form action={editBookWithId}>
    <div >
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
           Title
        </label>
        <input
        type="text"
        id="title"
        name="title"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        defaultValue={book.title}
        required
        >
        
        </input>

    </div>

    <div>
        <label htmlFor='author' className="block text-sm font-medium text-gray-700">
            Author
        </label>
        <input
        type="text"
        id="author"
        name="author"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        defaultValue={book.author_name}
        required
        >
        
        </input>
    </div>

    <div>
        <label htmlFor='genre' className="block text-sm font-medium text-gray-700">
            Genre
        </label>
        <select
        type="text"
        id="genre"
        name="genre"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        defaultValue={book.genre_name}
        required
        >
            <option value="">Select a genre</option>
            <option value="التاريخ">التاريخ</option>
            <option value="التراجم">التراجم</option>
            <option value="التشيع">التشيع</option>
            <option value="اصول الفقه وقواعده">اصول الفقه وقواعده</option>
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

        <div >
        <label htmlFor="publisher" className="block text-sm font-medium text-gray-700">
           Publisher
        </label>
        <input
        type="text"
        id="publisher"
        name="publisher"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        defaultValue={book.publisher_name}
        required
        >
        
        </input>

    </div>

    <div>
        <table>
            <thead>
                <tr>
                    <th  className="py-2 px-4 border-b text-center">Publication Edition</th>
                    <th  className="py-2 px-4 border-b text-center">Volumes</th>
                    <th  className="py-2 px-4 border-b text-center">Shelf Location</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="py-2 px-4 border-b">{book.publication_edition}</td>
                    <td className="py-2 px-4 border-b">Needs fixing</td>
                    <td className="py-2 px-4 border-b">{book.shelf_location}</td>
                </tr>
            </tbody>
        </table>
    </div>
<button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
    Edit
</button>
</form>
    )

};




