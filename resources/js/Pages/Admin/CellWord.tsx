import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import {Head, useForm} from '@inertiajs/react'
import {PageProps} from '@/types'
import {Editor} from '@/Components/Editor'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import InputError from '@/Components/InputError'
import React from "react";

export default function CellWord({auth}: PageProps) {
    const {data, setData, reset, errors,} = useForm({title: '', editor: ''})

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(data)
        reset()
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Painel</h2>}
        >
            <Head title="Pal. Célula"/>
            <div className="mt-2">
                <div className="max-w-8xl mx-auto">
                    <form onSubmit={handleSubmit} className=''>
                        <div className="space-y-2">
                            <InputLabel className='uppercase text-xs tracking-widest font-thin' value='Titulo'/>
                            <input type="text"
                                   className="w-full sm:max-w-xl rounded-lg text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Digite um titulo para a palavra de célula..."
                                   value={data.title}
                                   onChange={(e) => setData('title', e.target.value)}
                                   required
                            />
                            <InputError message={errors.title} className="mt-2"/>
                        </div>
                        <div className="mt-6 space-y-2">
                            <Editor editor={data.editor} setEditor={setData}/>
                            <InputError message={errors.editor} className="mt-2"/>
                        </div>
                        <div className='flex justify-end'>
                            <PrimaryButton className='mt-4'>Salvar</PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
