import { Links } from "@/types"
import { Link } from "@inertiajs/react"
import React from "react"

export const Paginate = (props: { data: Links[] }) => {
    return (
        <nav className="flex items-center flex-column flex-wrap md:flex-row pt-4 justify-end" aria-label="Table navigation">
            <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                {React.Children.toArray(
                    props.data.map((link) => {
                        if (link.url !== null) {
                            return <Link href={link.url}
                                className={`
                                        ${link.active ?
                                        'flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' :
                                        'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                                        ${link.label === 'Anterior' ? 'flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                                        : ''}
                                        ${link.label === 'Próximo' ? 'flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
                                        : ''}
                                        `}>
                                {link.label}
                            </Link>
                        }
                    })
                )}
            </ul>
        </nav>
    )
}
