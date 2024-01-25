import { PageProps } from "@/types"
import { usePage } from "@inertiajs/react"
import NavLink from "./NavLink"

export default function Sidebar(){
    const { sidebarMenus, auth } = usePage<PageProps>().props

    return (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <div className="flex flex-col mt-6">

                    <div>
                        {sidebarMenus.map((item) => (
                            <div key={item.title}>
                                <h1 className="text-gray-500 text-base  uppercase tracking-widest font-thin leading-7 border-gray-700 px-2 py-2 " key={item.title}>{item.title}</h1>
                                <div className="mb-4">
                                    {item.items.map(({ label, url }, index) => (
                                        <div key={index} className="p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <NavLink href={route(url)} active={route().current(url)} >
                                                <div className="flex items-center">
                                                    {label}
                                                </div>
                                                {/* <Users size={28} className="rounded-sm mr-3 text-gray-200 bg-gray-600 p-1" /> */}
                                            </NavLink >
                                            {label === "Permissões" && auth.countUserWithoutPermission ?
                                                <span
                                                    className="bg-red-100 ml-4 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-gray-200">
                                                    {auth.countUserWithoutPermission}
                                                </span>
                                                : ''}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    )
}
