import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';

export default function Dashboard({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Painel</h2>}
        >
            <Head title="Dashboard" />

            <div className="mt-2">
                <div className="max-w-8xl mx-auto">
                    <div className="flex flex-col sm:flex-row sm:justify-around sm:px-6 lg:px-8 p-4 sm:p-8 bg-white dark:bg-gray-800 shadow">
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm mb-4">
                            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-yellow-500 dark:border-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-200">Células</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-200">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm mb-4">
                            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Líderes</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
                            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Financeiro</h5>
                                <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </div>
                        </div>
                    </div>
                    <div className='bg-purple-600 w-full h-auto'>...</div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
