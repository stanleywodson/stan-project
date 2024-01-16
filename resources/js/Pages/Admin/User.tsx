import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head } from '@inertiajs/react'
import { PageProps, Permissions, UserData } from '@/types'
import { Paginate } from '@/Components/Paginate'
import InputLabel from '@/Components/InputLabel'
import InputError from '@/Components/InputError'
import SecondaryButton from '@/Components/SecondaryButton'
import Modal from '@/Components/Modal'
import { useState } from 'react'
import DangerButton from '@/Components/DangerButton'
import { Link } from "@inertiajs/react"

export default function User({ auth, users, permissions }: PageProps<{ permissions: Permissions[] }>) {
    const [confirmingUserEdition, setconfirmingUserEdition] = useState(false)
    const [user, setUser] = useState<UserData>()
    const [permissionAvaliable, setPermissionAvaliable] = useState<Permissions[]>()

    const confirmUserEdition = (id: number) => {
        const findUser = users.data?.find((user) => user.id === id)

        const permissionsAvaliable =
            permissions.filter(permission => !findUser?.permissions?.find(({ id }) => id === permission.id))

        setPermissionAvaliable(permissionsAvaliable)
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
                    <div className="flex p-2">
                        <div className="flex-1">
                            <InputLabel htmlFor="stanley" value="stanley" className="sr-only" />
                            {/* Checkbox */}
                            <span className='mt-4 uppercase text-xs text-gray-300'>Vincular Permissões</span>
                            <ul className="mt-2 items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                {permissionAvaliable?.map(({ name, id }, index) => (
                                    <li className={`w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600`}>
                                        <div className="flex items-center ps-3">
                                            <input id={name} type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor={name} className="w-full py-3 ms-2 text-xs font-medium text-gray-900 dark:text-gray-300 uppercase">{name}</label>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <InputError message={''} className="mt-2" />
                        </div>
                    </div>
                    {!user?.permissions?.length ? null :
                        <div className="flex p-2 mt-2">
                            <div className="flex-1">
                                <InputLabel htmlFor="stanley" value="stanley" className="sr-only" />
                                <span className='mt-4 uppercase text-xs text-gray-300'>desvincular permissões</span>
                                <div className="bg-gray-700 p-2 rounded-lg mt-2 space-y-1">
                                    {user?.permissions?.map(({ name, id }) => (
                                        <div className="flex items-center max-w-xs justify-between">
                                            <span key={id} className="uppercase text-xs text-gray-300">{name}</span>
                                            <Link href={route('permission-user', [user.id, id])} preserveState>
                                                <DangerButton>
                                                    desvincular
                                                </DangerButton>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    }

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancelar</SecondaryButton>
                        {/* <PrimaryButton className="ms-4" disabled={false}>
                            salvar
                        </PrimaryButton> */}
                    </div>
                </form>
            </Modal>
        </AuthenticatedLayout>
    );
}
