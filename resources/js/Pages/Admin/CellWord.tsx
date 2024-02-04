import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, router } from '@inertiajs/react'
import { Links, PageProps } from '@/types'
import { Editor } from '@/Components/Editor'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import { useForm } from 'react-hook-form'
import "react-toastify/dist/ReactToastify.css";
import { FormEventHandler, useState } from 'react'
import { Paginate } from '@/Components/Paginate'
import { Trash, Eye, PencilLine } from '@phosphor-icons/react'
import Modal from '@/Components/Modal'
import DangerButton from '@/Components/DangerButton'
import SecondaryButton from '@/Components/SecondaryButton'
import InputError from '@/Components/InputError'
import { sanitizeFildBodyEditor } from '../../Helpers/sanitizeEditor'

type WordCellData = {
    id: string
    title: string
    body: string
    sketch: boolean
    created_at?: string
}

type WordCell<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    data: WordCellData[]
    links: Links[]
}

export default function CellWord({ auth, flash, errors, wordcells }: PageProps<{
    errors: { title: string, body: string }, wordcells: WordCell
}>) {
    const [wordcell, setWordcell] = useState<WordCellData>()
    const [confirmingUserEdition, setconfirmingUserEdition] = useState(false)
    const [confirmingSaving, setconfirmingSaving] = useState(false)
    const [idWordcell, setIdWordcell] = useState('')
    const [onlyView, setOnlyView] = useState(false)
    const { handleSubmit, setValue, reset, register } = useForm<WordCellData>({
        defaultValues: {
            'id': '',
            'title': '',
            'body': '',
            'sketch': false
        }
    })

    const isNotPageable = 1

    const closeModal = () => setconfirmingUserEdition(false)
    const closeModalSave = () => setconfirmingSaving(false)

    const showDeleteModal = (id: string) => {
        setIdWordcell(id)
        setconfirmingUserEdition(true)
    }

    const showSaveModal: FormEventHandler = (e) => {
        e.preventDefault()
        setconfirmingSaving(true)
        setValue('sketch', false)
    }

    const handleSubmitDelete: FormEventHandler = (e) => {
        e.preventDefault()
        router.delete(`wordcell/${idWordcell}`)
        setIdWordcell('')
        setconfirmingUserEdition(false)
        setOnlyView(false)
        setWordcell({
            id: '',
            title: '',
            body: '',
            sketch: false,
            created_at: '',
        })
        reset()
    }

    const filterEditWordcell = (id: string, title: string, body: string, action?: boolean) => {
        const wordcell = wordcells.data.find((item) => item.id === id)
        //vão ser renderizados na tela
        setValue('id', id)
        setValue('title', title)
        setValue('body', body)
        setWordcell(wordcell)
        //---------------------------
        if (!action) {
            setOnlyView(true)
            return
        }
        // enviado para inserção
        setOnlyView(false)

    }

    const onSubmit = (data: WordCellData) => {

        const sanitizeEditor = sanitizeFildBodyEditor(data.body)
        if (!sanitizeEditor) return

        router.post('wordcell', data)

        if (!data.sketch)
            setconfirmingSaving(false)

        setWordcell({
            id: '',
            title: '',
            body: '',
            sketch: false,
            created_at: '',
        })
        reset()
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Painel</h2>}
        >
            <Head title="Pal. Célula" />
            <div className="mt-2">
                <div className="max-w-8xl mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-2">
                            <InputLabel className='uppercase text-xs tracking-widest font-thin' value='Titulo' />
                            <input type="text"
                                className="w-full sm:max-w-xl rounded-lg text-sm text-gray-900 border border-gray-300 bg-gray-50 disabled:opacity-50  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Digite um titulo para a palavra de célula..."
                                disabled={onlyView}
                                {...register('title', { required: true })}
                            />
                            {errors.title && <span className='text-white'>This field is required</span>}
                            <InputError message={errors.title} className="mt-2" />
                        </div>
                        <div className="mt-6 space-y-2">
                            <Editor setEditor={setValue} readonly={onlyView} content={wordcell?.body} />
                            <InputError message={errors.body} className="mt-2" />

                        </div>
                        {!onlyView ?
                            <div className='flex-col sm:space-x-2 sm:flex sm:flex-row sm:justify-end'>
                                {/* <PrimaryButton onClick={() => setValue('sketch', true)} className='w-full sm:w-auto mt-4'>Salvar como rascunho</PrimaryButton> */}
                                {/* <PrimaryButton onClick={() => setValue('sketch', false)} className='w-full sm:w-auto mt-4'>Salvar e enviar</PrimaryButton> */}
                                <SecondaryButton type='submit' className='w-full sm:w-auto mt-4' onClick={() => setValue('sketch', true)}>Salvar como rascunho</SecondaryButton>
                                <PrimaryButton onClick={showSaveModal} className='w-full sm:w-auto mt-4'>Salvar e enviar</PrimaryButton>
                            </div>
                            : <div className='h-[50px]'>
                                <span className='text-gray-900'>...</span>
                            </div>
                        }
                    </form>
                    <div className=' mt-6 border-b-2 border-gray-800'>
                        <span className='text-gray-600 text-md uppercase tracking-tight'>últimas palavras de célula</span>
                    </div>
                    <div className="relative rounded-lg overflow-x-auto shadow-sm mt-4">
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
                                                    <span className='text-gray-300 hover:underline cursor-pointer hover:text-blue-400' onClick={() => filterEditWordcell(id, title, body)}><Eye size={19} /></span> :
                                                    <span className='text-yellow-600 hover:underline cursor-pointer hover:text-yellow-400' onClick={() => filterEditWordcell(id, title, body, true)}><PencilLine size={19} /></span>
                                                }
                                                <span className='cursor-pointer'
                                                    onClick={() => showDeleteModal(id)}><Trash size={19}
                                                        className='text-red-600 hover:text-red-400 rounded-sm' />
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
                            Deseja deletar?
                        </h2>

                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            A palavra de "célula" será deletada permanentemente.
                        </p>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton onClick={closeModal}>Cancelar</SecondaryButton>

                            <DangerButton className="ms-3">
                                Deletar
                            </DangerButton>
                        </div>
                    </form>
                </Modal>

                <Modal maxWidth={'md'} show={confirmingSaving} onClose={closeModalSave}>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
                        <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                            Deseja salvar e enviar?
                        </h2>

                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            A palavra de "célula" será enviada para o líder, é não poderá mais ser alterada.
                        </p>

                        <div className="mt-6 flex justify-end">
                            <SecondaryButton onClick={closeModalSave}>Cancelar</SecondaryButton>

                            <PrimaryButton className="ms-3 dark:bg-green-700 dark:text-white dark:focus:bg-green-600  dark:hover:bg-green-600">
                                Salvar e enviar
                            </PrimaryButton>
                        </div>
                    </form>
                </Modal>
            </div>
        </AuthenticatedLayout >
    );
}
