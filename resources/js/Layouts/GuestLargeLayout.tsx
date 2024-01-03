import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export const GuestLargeLayout = ({ children }: PropsWithChildren) => {
    return (
        <div className="min-h-screen flex flex-col items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-800">
            <div className="mt-4">
                <Link href="/">
                    <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                </Link>
            </div>
            <div className="w-full bg-gray-900 mt-4">
                {children}
            </div>
        </div>
    );
}
