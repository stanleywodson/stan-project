export interface User {
    id: number
    name: string
    email: string
    email_verified_at: string
    created_at?: string
    updated_at?: string
}

export interface Links {
    active: boolean
    label: string
    url: string | null
}

export interface SidebarMenu {
    label: string
    icon: string|null
    url: string
}

interface Sidebar {
    title: string
    items: SidebarMenu[]
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User
    },
 
    sidebarMenus: Sidebar[]

    users: {
        data: User[]
        links: Links[]
    }
};
