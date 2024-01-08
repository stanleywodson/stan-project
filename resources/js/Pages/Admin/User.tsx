import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Paginate } from '@/Components/Paginate';

export default function User({ auth, users }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Usuários</h2>}
        >
            <Head title="Usuários" />
            <div className="mt-2">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            {!users.data.length ?
                                <h1 className="font-thin tracking-wide">Não tem Usuários Cadastrados</h1>
                                :
                                <ul className="flex flex-col gap-2">
                                    {users.data?.map((item) => (
                                        <div key={item.id} onClick={() => alert(`clicou - ${item.id}`)} className="flex justify-between border rounded-md border-gray-700 p-3 w-2/4 hover:bg-gray-700">
                                            <li className="font-thin">{item.name}</li>
                                            <div>
                                                <span className='bg-yellow-500 px-4 border rounded-lg border-gray-700 text-sm mr-2'>ddd</span>
                                                <span className='bg-green-500 px-4 border rounded-lg border-gray-700 text-sm'>ddd</span>
                                            </div>
                                        </div>
                                    ))}
                                    <Paginate data={users.links} />
                                </ul>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
