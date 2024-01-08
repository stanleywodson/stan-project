export interface User {
    id: number
    name: string
    email: string
    email_verified_at: string
    created_at?: string
    updated_at?: string
}

export interface Permissions {
    admin: boolean
    financial: boolean
    leader: boolean
    media: boolean
}

export interface Links {
    active: boolean
    label: string
    url: string | null
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User
    },
    permissions: Permissions
    users: {
        data: User[]
        links: Links[]
    }
};
