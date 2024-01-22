import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { Editor } from '@/Components/Editor';

export default function CellWord({ auth }: PageProps) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Painel</h2>}
        >
            <Head title="Pal. Célula" />
            <div className="mt-2">
                <div className="max-w-8xl mx-auto">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm">
                    <Editor />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
