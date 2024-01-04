import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function User({ auth, users }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Usuários</h2>}
        >
            <Head title="Financeiro" />
            <div className="mt-2">
                <div className="max-w-8xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <ul className="flex flex-col gap-2">
                                {users?.map((item) => (
                                    <div  onClick={() => alert(`clicou - ${item.id}`)} className="flex justify-between border rounded-md border-gray-700 p-3 w-2/4 hover:bg-gray-700">
                                        <li key={item.id} className="font-thin">{item.name.toLocaleUpperCase()}</li>
                                        <div>
                                            <span className='bg-yellow-500 px-4 border rounded-lg border-gray-700 text-sm mr-2'>ddd</span>
                                            <span className='bg-green-500 px-4 border rounded-lg border-gray-700 text-sm'>ddd</span>
                                        </div>
                                    </div>
                                ))}
                            </ul>
                            {!users.length && <h1>Não tem Usuários</h1>}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
