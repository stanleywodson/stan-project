export interface User {
    id: number
    name: string
    email: string
    status?: string
    email_verified_at: string
    created_at?: string
    updated_at?: string
}

export interface Links {
    active: boolean
    label: string
    url: string | null
}

export interface Permissions {
    id: number
    name: string
}

interface UserData {
    id: number
    name: string
    email: string
    status?: string
    email_verified_at?: string | null
    created_at?: string | null
    updated_at?: string | null
    permissions?: Permissions[]
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
        countUserWithoutPermission: number|null,
    },

    sidebarMenus: Sidebar[]

    users: {
        data: UserData[]
        links: Links[]
        last_page: number
    }

    flash: {
        attach: string
        detach: string
    }
};
