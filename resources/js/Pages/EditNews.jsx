import React, { useState } from 'react';
import { Head } from '@inertiajs/inertia-react';
import Navbar from '@/Components/Navbar';
import { Inertia } from '@inertiajs/inertia';
 
export default function EditNews(props){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = () => {
        const data = {
            id: props.myNews.id, title, description, category
        }
        //inertia ke mana, datanya apa
        Inertia.post('/news/update', data)
        setTitle('')
        setDescription('')
        setCategory('')
    }

    return(
        <div className='min-h-screen bg-slate-50'>
            <Head title={props.title}/>
            <Navbar user={props.auth.user}/>
            <div className="card w-full lg:w-96 bg-base-100 shadow-xl m-2">
                <div className='p-4 text-2xl'>EDIT QnA</div>
                <div className='p-4 text-2xl'>Ulangi pengisian data secara keseluruhan</div>
                <div className="card-body">
                <input type="text" placeholder="Pertanyaan" className="m-1 input bg-blue-100 input-bordered w-full" onChange={(title) => setTitle(title.target.value)} defaultValue={props.myNews.title} />
                <input type="text" placeholder="Deskripsi Jawaban" className="m-1 input bg-blue-100 input-bordered w-full" onChange={(description) => setDescription(description.target.value)} defaultValue={props.myNews.description} />
                <input type="text" placeholder="Katagori" className="m-1 input bg-blue-100 input-bordered w-full" onChange={(category) => setCategory(category.target.value)} defaultValue={props.myNews.category}/>
                <button className='m-1 btn btn-primary bg-blue-700' onClick={() => handleSubmit()}>SIMPAN PERUBAHAN</button>
                </div> 
            </div>
        </div>
    )
}  