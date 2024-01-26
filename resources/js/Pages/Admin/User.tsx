import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, router } from '@inertiajs/react'
import { PageProps, Permissions, UserData } from '@/types'
import { Paginate } from '@/Components/Paginate'
import SecondaryButton from '@/Components/SecondaryButton'
import Modal from '@/Components/Modal'
import { useEffect, useRef, useState } from 'react'
import DangerButton from '@/Components/DangerButton'
import PrimaryButton from '@/Components/PrimaryButton'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

export default function User({ auth, users, permissions, flash, resultSearch }: PageProps<{
	permissions: Permissions[],
	resultSearch: HTMLInputElement
}>) {
	const [confirmingUserEdition, setconfirmingUserEdition] = useState(false)
	const [user, setUser] = useState<UserData>()
	const searchRef = useRef<HTMLInputElement>(resultSearch)
	const [permissionAvaliable, setPermissionAvaliable] = useState<Permissions[]>()

	const permissionWithOutAdmin = permissions.filter(({ name }) => name !== 'admin')
	const getData = () => {
		router.get('users',
			{ search: searchRef.current.value },
			{ preserveState: true, replace: true })
	}

	const handleSearch = (e: { preventDefault: () => void }) => {
		e.preventDefault()
		getData()
	}

	useEffect(() => {
		if (flash.attach) {
			toast.success(flash.attach)
		}
		if (flash.detach) {
			toast.error(flash.detach)
		}
	}, [flash])

	const confirmUserEdition = (id: number) => {
		const findUser = users.data?.find((user) => user.id === id)

		const permissionsAvaliable = permissionWithOutAdmin.filter(
			permission => !findUser?.permissions?.find(({ id }) => id === permission.id
			))

		setPermissionAvaliable(permissionsAvaliable)
		if (!findUser) return

		setUser(findUser)
		setconfirmingUserEdition(true)
	}

	const closeModal = () => setconfirmingUserEdition(false)

	return (
		<AuthenticatedLayout
			user={auth.user}
			header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Usuários</h2>}
		>
			<Head title="Permissões" />
			<div className="mt-2">
				<div className="max-w-8xl mx-auto">
					<div className="flex flex-col sm:flex-row  items-center">
						<form onSubmit={handleSearch} className="flex w-full sm:flex-1 gap-2 items-center mb-6">
							<input type="text"
								className="w-full sm:w-1/4 rounded-lg text-sm text-gray-900 border border-gray-300 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								placeholder="Buscar..."
								ref={searchRef}
							/>
						</form>
					</div>

					<div className="relative rounded-lg overflow-x-auto shadow-sm">
						<ToastContainer />
						<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
							<thead
								className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
								{users.data?.map(({ name, email, id, status, permissions }) => {
									return id === 1 ? '' :
										<tr key={id}
											className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
											<th scope="row"
												className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
												{name}
											</th>
											<td className="px-6 py-4">
												{email}
											</td>
											<td className="px-6 py-4 flex-col gap-1 inline-flex">
												{!permissions?.length && <span className="text-center">-</span>}
												{permissions?.map(({ name, id }) => (
													<span key={id} className="uppercase text-xs">{name}</span>
												))}
											</td>
											<td className="px-6 py-4">
												{!status && <span className="text-center">-</span>}
												<span id="permissionName" className={
													`uppercase text-xs
                                                    ${status === 'active' ? 'after:bg-green-600' : ''}
                                                    ${status === 'pending' ? 'after:bg-orange-500' : ''}
                                                    ${status === 'disabled' ? 'after:bg-red-600' : ''}
                                                    `}>
												</span>
											</td>
											<td className="px-6 py-4">
												<div
													className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
													<span onClick={() => confirmUserEdition(id)}>Editar</span>

												</div>
											</td>
										</tr>
								})}
							</tbody>
						</table>
                        {users.last_page === 1 ? '' :
						<Paginate data={users.links} />
                        }
					</div>
				</div>
			</div>

			<Modal show={confirmingUserEdition} onClose={closeModal} closeable={false}>
				<div className="p-6">
					<h2 className="text-lg font-medium text-gray-900 dark:text-gray-100 uppercase">
						{user?.name}
					</h2>
					<div className='flex-col w-80 sm:w-full space-y-4'>
						{!permissionAvaliable?.length ? null :
							<div>
								<span className='mt-4 uppercase text-xs text-gray-300'>Vincular Permissões</span>
								<div className="bg-gray-700 p-2 rounded-lg mt-2 space-y-1">
									{permissionAvaliable?.map(({ name, id }) => (
										<div key={id} className="flex items-center max-w-xs justify-between">
											<span className="uppercase text-xs text-gray-300">{name}</span>
											<Link href={route('permission-user-atach', [user?.id, id])} preserveState>
												<PrimaryButton
													onClick={closeModal}
												>
													vincular
												</PrimaryButton>
											</Link>
										</div>
									))}
								</div>
							</div>
						}
						{!user?.permissions?.length ? null :
							<div>
								<span className='mt-4 uppercase text-xs text-gray-300'>desvincular permissões</span>
								<div className="bg-gray-700 p-2 rounded-lg mt-2 space-y-1">
									{user?.permissions?.map(({ name, id }) => (
										<div key={id} className="flex items-center max-w-xs justify-between">
											<span className="uppercase text-xs text-gray-300">{name}</span>
											<Link href={route('permission-user', [user.id, id])} preserveState>
												<DangerButton
													onClick={closeModal}
													disabled={
														(name === 'admin' && user.id === auth.user.id || name === 'admin' && user.id === 1)
													}>
													desvincular
												</DangerButton>
											</Link>
										</div>
									))}
								</div>
							</div>
						}

					</div>
					<div className="mt-6 flex justify-end">
						<SecondaryButton onClick={closeModal}>Cancelar</SecondaryButton>
					</div>
				</div>
			</Modal>
		</AuthenticatedLayout>
	);
}
