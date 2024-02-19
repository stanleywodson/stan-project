export type RegisterProps = {
    name: string
    gender: string
    birth: string
    cpf: string
    email: string
    password: string
    password_confirmation: string
    address: {
        cep: string
        city: string
        neighborhood: string
        complement: string
        phone: string
        number: string
    }
}
