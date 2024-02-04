import { useEffect } from 'react';
import { useForm } from 'react-hook-form'
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, router } from '@inertiajs/react';
import AcendaLuz from '../../../images/banners/acenda-luz.jpg'
import axios from 'axios';
import InputError from '@/Components/InputError';
import { brasiliancities } from '../../mocks/brasiliancities'

type Register = {
    name: string
    gender: string
    birth: string
    cpf: string
    email: string
    password: string
    confirm_password: string
    address: {
        cep: string
        city: string
        neighborhood: string
        complement: string
    }
}

export default function Register() {
    const { handleSubmit, setValue, reset, register, watch, formState: { errors }, } = useForm<Register>({
        defaultValues: {
            name: '',
            gender: '',
            birth: '',
            cpf: '',
            email: '',
            password: '',
            confirm_password: '',
            address: {
                cep: '',
                city: '',
                neighborhood: '',
                complement: '',
            },
        }
    })

    // const submit: FormEventHandler = (e) => {
    //     e.preventDefault();

    //     post(route('register'));
    // }

    const onSubmit = (data: Register) => {
        router.post('register', data)
    }

    const resultCep = watch('address.cep')

    useEffect(() => {
        if (!resultCep || resultCep.length < 8) return

        const fetchResultCep = (async () => {
            try {
                const { data } = await axios.get(`https://viacep.com.br/ws/${resultCep}/json/`)
                setValue('address.neighborhood', data.bairro)
                setValue('address.complement', data.logradouro)
            } catch (error) {
                console.log(error)
            }
        })
        fetchResultCep()
    }, [resultCep])

    return (
        <>
            <Head title="Cadastrar" />
            <div className='bg-gray-900 min-h-screen flex-col sm:flex sm:flex-row'>
                <div className='flex-1'>
                    <img
                        className="w-full h-full object-cover bg-orange-500 "
                        src={AcendaLuz}
                    />
                </div>
                <div className='flex flex-1  justify-center p-2 mt-4'>
                    <div className='w-[700px] rounded-md'>
                        <div className='text-center'>
                            <span className='font-thin text-2xl text-gray-300'>Cadastrar</span>
                            {/* <span className='text-gray-400 text-sm'> - seja um líder de célula</span> */}
                        </div>
                        <form className='mt-4' onSubmit={handleSubmit(onSubmit)}>
                            <div className='mt-6'>
                                <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome Completo</label>
                                <input
                                    type="text"
                                    id="full_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Nome completo..."
                                    {...register('name', { required: "O campo nome é obrigatório" })}
                                />
                                {errors.name && <InputError message={errors.name.message} className="mt-1" />}
                            </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6">
                                <div>
                                    <label htmlFor="cpf" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cpf</label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="000.000.000-00"
                                        type="text"
                                        id="cpf"
                                        {...register('cpf', { required: "O campo cpf é obrigatório" })}
                                    />
                                    {errors.cpf && <InputError message={errors.cpf.message} className="mt-1" />}
                                </div>
                                <div>
                                    <label htmlFor="birth" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data de Nascimento</label>
                                    <input
                                        type="date"
                                        id="birth"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        {...register('birth', { required: "O campo data de nascimento é obrigatório" })}
                                    />
                                    {errors.birth && <InputError message={errors.birth.message} className="mt-1" />}
                                </div>
                                <div>
                                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gênero</label>
                                    <select
                                        id="gender"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        {...register('gender', { required: "O campo gênero é obrigatório" })}
                                    >
                                        <option value="">Selecione um gênero</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="feminino">Feminino</option>
                                    </select>
                                    {errors.gender && <InputError message={errors.gender.message} className="mt-1" />}
                                </div>
                                <div>
                                    <label htmlFor="cep" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cep</label>
                                    <input
                                        type="text" id="cep"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="71690000"
                                        {...register('address.cep', { required: "O campo cep é obrigatório" })}
                                    />
                                    {errors.address?.cep && <InputError message={errors.address.cep.message} className="mt-1" />}
                                </div>
                            </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6">
                                <div>
                                    <label htmlFor="neighborhood" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bairro</label>
                                    <input
                                        type="text"
                                        id="neighborhood"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        {...register('address.neighborhood', { required: "O campo bairro é obrigatório" })}
                                    />
                                    {errors.address?.neighborhood && <InputError message={errors.address.neighborhood.message} className="mt-1" />}
                                </div>
                                <div>
                                    <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cidade</label>
                                    <select
                                        id="city"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        {...register('address.city', { required: "O campo cidade é obrigatório" })}
                                    >
                                        <option value="">Selecione uma cidade</option>
                                        {brasiliancities.map((cidade) => (
                                            <option key={cidade} value={cidade}>
                                                {cidade}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.address?.city && <InputError message={errors.address?.city.message} className="mt-1" />}
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="complement" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Complemento</label>
                                <input
                                    type="text"
                                    id="complement"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Rua da ponte, 23..."
                                    {...register('address.complement')}
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="john.doe@company.com"
                                    {...register('email', { required: "O campo email é obrigatório" })}
                                />
                                {errors.email && <InputError message={errors.email.message} className="mt-1" />}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="•••••••••"
                                    {...register('password', { required: "O campo senha é obrigatório" })}
                                />
                                {errors.password && <InputError message={errors.password.message} className="mt-1" />}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar senha</label>
                                <input
                                    type="password"
                                    id="confirm_password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="•••••••••"
                                    {...register('confirm_password', { required: "O campo confirmar senha é obrigatório" })}
                                />
                                {errors.confirm_password && <InputError message={errors.confirm_password.message} className="mt-1" />}
                            </div>
                            <div className='text-right'>
                                <PrimaryButton className="ms-4">
                                    Cadastrar
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
