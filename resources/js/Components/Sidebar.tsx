import { PageProps } from "@/types"
import { usePage } from "@inertiajs/react"
import NavLink from "./NavLink"
import { Users } from "@phosphor-icons/react/dist/ssr"

export const Sidebar = () => {
    const menus = usePage<PageProps>().props.sidebarMenus

    return (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <div className="flex flex-col mt-10">
                    <div>
                        {menus.map((item) => (
                            <div key={item.title}>
                                <h1 className="text-gray-500 text-base  uppercase tracking-widest font-thin leading-7 border-gray-700 px-2 py-2 " key={item.title}>{item.title}</h1>
                                <div className="mb-4">
                                    {item.items.map((subItem, index) => (
                                        <div key={index} className="flex items-center p-2 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                            <NavLink href={route(subItem.url)} active={route().current(subItem.url)} >
                                                 {subItem.label}
                                                 {/* <Users size={28} className="rounded-sm mr-3 text-gray-200 bg-gray-600 p-1" /> */}
                                            </NavLink >
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
