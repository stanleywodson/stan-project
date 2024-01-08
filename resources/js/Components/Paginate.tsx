import { Links } from "@/types"
import { Link } from "@inertiajs/react"

export const Paginate = (props: { data: Links[] }) => {
    return (
        <nav aria-label="Page navigation">
            <ul className="flex items-center -space-x-px h-10 text-base mt-2">
                {props.data.map((link) => {
                    if (link.url !== null) {
                        return <Link
                            href={link.url}
                            className={`
                        ${link.active ?
                                    'z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white' :
                                    'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'}
                        `}>
                            {link.label}
                        </Link>
                    }
                })}
            </ul>
        </nav>
    )
}
