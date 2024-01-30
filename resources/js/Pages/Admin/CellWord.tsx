import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router } from '@inertiajs/react'
import { Links, PageProps } from '@/types'
import { Editor } from '@/Components/Editor'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import { useForm } from 'react-hook-form'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { FormEventHandler, useEffect, useState } from 'react'
import { Paginate } from '@/Components/Paginate'
import { Trash, Eye, PencilLine  } from '@phosphor-icons/react'
import Modal from '@/Components/Modal'
import DangerButton from '@/Components/DangerButton'
import SecondaryButton from '@/Components/SecondaryButton'

interface WordCellData {
    id: string
    title: string
    body: string
    sketch: boolean
    created_at: string
}

type WordCell<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    data: WordCellData[]
    links: Links[]
}

export default function CellWord({ auth, flash, errors, wordcells }: PageProps<{
    errors: { title: string }, wordcells: WordCell
}>) {
    const [wordcell, setWordcell] = useState<WordCellData>()
    const [confirmingUserEdition, setconfirmingUserEdition] = useState(false)
    const [idWordcell, setIdWordcell] = useState('')
    const { handleSubmit, setValue, reset, register } = useForm({
        defaultValues: {
            'id': '',
            'title': '',
            'body': '',
            'sketch': false
        }
    })

    const isNotPageable = 1

    const closeModal = () => setconfirmingUserEdition(false)

    const showDeleteModal = (id: string) => {
        setIdWordcell(id)
        setconfirmingUserEdition(true)
    }

    const handleSubmitDelete: FormEventHandler = (e) => {
        e.preventDefault()
        router.delete(`wordcell/${idWordcell}`)
        setIdWordcell('')
        setconfirmingUserEdition(false)
    }

    const filterEditWordcell = (id: string, title: string, body: string) => {
        const wordcell = wordcells.data.find((item) => item.id === id)
        setValue('id', id)
        setValue('title', title)
        setValue('body', body)
        setWordcell(wordcell)
    }
    // vou conseguir pegar a tipagem pelo objeto do useform
    const onSubmit = (data: any) => {
        router.post('wordcell', data)
        setWordcell({
            id: '',
            title: '',
            body: '',
            sketch: false,
            created_at: '',
        })
        reset()
    }

    useEffect(() => {
        if (flash.wordcellMessage) {
            toast.success(flash.wordcellMessage)
        }
    }, [flash])

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Painel</h2>}
        >
            <Head title="Pal. Célula" />
            <div className="mt-2">
                <div className="max-w-8xl mx-auto">
                    <ToastContainer />
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-2">
                            <InputLabel className='uppercase text-xs tracking-widest font-thin' value='Titulo' />
                            <input type="text"
                                className="w-full sm:max-w-xl rounded-lg text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Digite um titulo para a palavra de célula..."
                                {...register('title')}
                                required
                            />
                        </div>
                        <div className="mt-6 space-y-2">
                            <Editor setEditor={setValue} readonly={false} content={wordcell?.body} />
                        </div>
                        <div className='flex-col sm:space-x-2 sm:flex sm:flex-row sm:justify-end'>
                            <PrimaryButton onClick={() => setValue('sketch', true)} className='w-full sm:w-auto mt-4 dark:bg-gray-400 hover:dark:bg-gray-500'>Salvar como rascunho</PrimaryButton>
                            <PrimaryButton onClick={() => setValue('sketch', false)} className='w-full sm:w-auto mt-4'>Salvar e enviar</PrimaryButton>
                        </div>
                    </form>
                    <div className="relative rounded-lg overflow-x-auto shadow-sm mt-10">
                        <ToastContainer />
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead
                                className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">Titulo</th>
                                    <th scope="col" className="px-6 py-3">Data de criação</th>
                                    <th scope="col" className="px-6 py-3">Status</th>
                                    <th scope="col" className="px-6 py-3">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wordcells?.data?.map(({ id, title, body, created_at, sketch }) => (
                                    <tr key={id}
                                        className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row"
                                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {title}
                                        </th>
                                        <td className="px-6 py-4">
                                            {created_at}
                                        </td>
                                        <td className="px-6 py-4">
                                            {!sketch ? <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">Enviado</span> :
                                                <span className="bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">Rascunho</span>
                                            }
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex font-medium space-x-5 ">
                                                {!sketch ?
                                                <span className='text-gray-300 hover:underline cursor-pointer'><Eye size={19} /></span> :
                                                <span className='text-yellow-600 hover:underline cursor-pointer ' onClick={() => filterEditWordcell(id, title, body)}><PencilLine size={19}/></span>
                                                }
                                                <span className='cursor-pointer'
                                                    onClick={() => showDeleteModal(id)}><Trash size={19}
                                                        className='text-red-500 hover:text-red-700 rounded-sm' />
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {wordcells.last_page === isNotPageable ? '' :
                            <Paginate data={wordcells.links} />
                        }
                    </div>
                </div>
                <Modal maxWidth={'md'} show={confirmingUserEdition} onClose={closeModal}>
                    <form onSubmit={handleSubmitDelete} className="p-6">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            Tem certeza que deseja deletar?
                        </h2>

                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            A palavra "célula" será deletada permanentemente.
                        </p>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton onClick={closeModal}>Cancelar</SecondaryButton>

                            <DangerButton className="ms-3">
                                Deletar
                            </DangerButton>
                        </div>
                    </form>
                </Modal>
            </div>
        </AuthenticatedLayout >
    );
}
