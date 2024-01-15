import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { PageProps, UserData } from '@/types'
import { Paginate } from '@/Components/Paginate'
import TextInput from '@/Components/TextInput'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import SecondaryButton from '@/Components/SecondaryButton'
import Modal from '@/Components/Modal'
import { useState } from 'react'
import PrimaryButton from '@/Components/PrimaryButton'

export default function User({ auth, users }: PageProps) {
    const [confirmingUserEdition, setconfirmingUserEdition] = useState(false)
    const [user, setUser] = useState<UserData>()
    const [data, setData] = useState() // posteriormente vai ser substituido pelo useForm

    const confirmUserEdition = (id: number) => {
        const findUser = users.data?.find((user) => user.id === id)
        if (!findUser) return

        setUser(findUser)
        setconfirmingUserEdition(true)
    }

    const closeModal = () => {
        setconfirmingUserEdition(false)
        // reset();
    }

    const submit = (e: any) => {
        e.preventDefault()
        alert('stanley wodson')
        setconfirmingUserEdition(false)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Usuários</h2>}
        >
            <Head title="Permissões" />
            <div className="mt-2">
                <div className="max-w-8xl mx-auto">
                    <div className="relative overflow-x-auto shadow-sm mt-4">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        nome
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        email
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        permissão
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Editar
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.data?.map(({ name, email, id, permissions }) => (
                                    <tr key={id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {name}
                                        </th>
                                        <td className="px-6 py-4">
                                            {email}
                                        </td>
                                        <td className="px-6 py-4 flex-col gap-1 inline-flex">
                                            {!permissions?.length && <span className="text-center">-</span>}
                                            {permissions?.map(({ name, id }) => (
                                                // <span className="bg-gray-100 text-gray-800 font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300 uppercase text-xs">{name}</span>
                                                <span key={id} className="uppercase text-xs">{name}</span>
                                            ))}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="uppercase text-xs">ativo</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                                {/* <Link href={route('users.show', [id])} > Editar</Link> */}
                                                <span onClick={() => confirmUserEdition(id)}>Editar</span>

                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <Paginate data={users.links} />
                    </div>
                </div>
            </div>

            <Modal show={confirmingUserEdition} onClose={closeModal} closeable={false} maxWidth={'2xl'}>
                <form onSubmit={submit} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 uppercase">
                        {user?.name}
                    </h2>

                    {/* <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Once your account is deleted, all of its resources and data will be permanently deleted. Please
                        enter your password to confirm you would like to permanently delete your account.
                    </p> */}
                    <div className="flex p-2">
                        <div className="flex-1">
                            <InputLabel htmlFor="stanley" value="stanley" className="sr-only" />
                            {/* Checkbox */}
                            <span className='mt-4 uppercase text-xs text-gray-300'>Vincular Permissões</span>
                            <ul className="mt-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div className="flex items-center ps-3">
                                        <input id="vue-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="vue-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Admin</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div className="flex items-center ps-3">
                                        <input id="react-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="react-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Leader</label>
                                    </div>
                                </li>
                                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                    <div className="flex items-center ps-3">
                                        <input id="angular-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="angular-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Media</label>
                                    </div>
                                </li>
                                <li className="w-full dark:border-gray-600">
                                    <div className="flex items-center ps-3">
                                        <input id="laravel-checkbox-list" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="laravel-checkbox-list" className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Financial</label>
                                    </div>
                                </li>
                            </ul>
                            <InputError message={''} className="mt-2" />
                        </div>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancelar</SecondaryButton>
                        <PrimaryButton className="ms-4" disabled={false}>
                            salvar
                        </PrimaryButton>
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
