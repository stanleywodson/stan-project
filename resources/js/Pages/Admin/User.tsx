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
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false)
    const [user, setUser] = useState<UserData>()

    const confirmUserEdition = (id: number) => {
        const findUser = users.data?.find((user) => user.id === id)
        if (!findUser) return

        setUser(findUser)
        setConfirmingUserDeletion(true)
    }

    const closeModal = () => {
        setConfirmingUserDeletion(false)
        // reset();
    }

    const submit = (e: any) => {
        e.preventDefault()
        alert('stanley wodson')
        setConfirmingUserDeletion(false)
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Usuários</h2>}
        >
            <Head title="Usuários" />
            <div className="mt-2">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-sm mt-4">
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

            <Modal show={confirmingUserDeletion} onClose={closeModal} closeable={false} maxWidth={'5xl'}>
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

                            <TextInput
                                id="stanley"
                                type="text"
                                name="password"
                                // ref={passwordInput}
                                // value={data.password}
                                // onChange={(e) => setData('password', e.target.value)}
                                className="mt-1 block w-3/4"
                                isFocused
                                placeholder="Password"
                            />

                            <InputError message={''} className="mt-2" />
                        </div>
                        {/* Inputs Checkbox */}
                        {/* <div className="flex flex-1 gap-2">
                            <div className='inline-flex p-2 gap-2 items-center border border-gray-700 rounded-md'>
                                <label className='text-gray-300' htmlFor="leader">Líder</label>
                                <input className='bg-gray-700' checked={true} type="checkbox" name="leader" id="" />
                            </div>
                            <div className='inline-flex p-2 gap-2 items-center border border-gray-700 rounded-md'>
                                <label className='text-gray-300' htmlFor="admin">Admin</label>
                                <input className='bg-gray-700' checked={true} type="checkbox" name="admin" id="" />
                            </div>
                            <div className='inline-flex p-2 gap-2 items-center border border-gray-700 rounded-md'>
                                <label className='text-gray-300' htmlFor="media">Mídia</label>
                                <input className='bg-gray-700' checked={true} type="checkbox" name="media" id="" />
                            </div>
                            <div className='inline-flex p-2 gap-2 items-center border border-gray-700 rounded-md'>
                                <label className='text-gray-300' htmlFor="financial">Financeiro</label>
                                <input className='bg-gray-700' checked={true} type="checkbox" name="financial" id="" />
                            </div>
                            <InputError message={''} className="mt-2" />
                        </div> */}
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
