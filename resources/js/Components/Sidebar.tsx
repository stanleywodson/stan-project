import { PageProps } from "@/types"
import { usePage } from "@inertiajs/react"
import NavLink from "./NavLink"

export default function Sidebar(){
    const { sidebarMenus, auth } = usePage<PageProps>().props

    return (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <div className="flex flex-col mt-6">

                </div>
            </div>
        </aside>
    )
}
