import React, { useEffect, useState, useCallback } from 'react';
import { useForm } from 'react-hook-form'
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, router } from '@inertiajs/react';
import AcendaLuz from '../../../images/banners/acenda-luz.jpg'
import axios from 'axios';
import InputError from '@/Components/InputError';
import InputMask from '@/Components/InputMask';

import { brasiliancities } from '@/mocks/brasiliancities'
import { ErrorBackend } from '@/types/error-backend';
import { RegisterProps } from '@/types/register';

// interface Usuario {
//     cep: string;
//     cpf: string;
//     price: number;
// }

export default function Register({ errors: errors_backend }: ErrorBackend) {

    // const [usuario, setUsuario] = useState<Usuario>({} as Usuario);

    // const handleChange = useCallback(
    //     (e: React.FormEvent<HTMLInputElement>) => {
    //         setUsuario({
    //             ...usuario,
    //             [e.currentTarget.name]: e.currentTarget.value,
    //         });
    //     },
    //     [usuario]
    // )

    const { handleSubmit, setValue, register, watch, formState: { errors }, } = useForm<RegisterProps>({
        defaultValues: {
            name: '',
            gender: '',
            birth: '',
            cpf: '',
            email: '',
            password: '',
            password_confirmation: '',
            address: {
                cep: '',
                city: '',
                neighborhood: '',
                complement: '',
                phone: '',
                number: '',
            },
        }
    })

    const onSubmit = (data: RegisterProps) => {
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
                        alt="image acenda uma luz"
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
                                <label htmlFor="full_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome
                                    Completo</label>
                                <input
                                    type="text"
                                    id="full_name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Nome completo..."
                                    {...register('name', { required: "O campo nome é obrigatório" })}
                                />
                                {<InputError message={errors.name?.message ?? errors_backend?.name} className="mt-1" />}
                            </div>
                            {/* <div className='mt-6'>
                                <InputMask
                                    name="cep"
                                    mask="cep"
                                    onChange={handleChange}
                                    placeholder="99999-999"
                                />
                            </div> */}
                            <div className="grid gap-6 mb-6 md:grid-cols-6 mt-6">
                                <div className='col-span-6 md:col-span-2'>
                                    <label htmlFor="cpf"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cpf</label>
                                    <input
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="000.000.000-00"
                                        type="text"
                                        id="cpf"
                                        {...register('cpf', { required: "O campo cpf é obrigatório" })}
                                    />
                                    {/* {<InputError message={errors.cpf?.message ?? errors_backend?.cpf} className="mt-1" />} */}
                                    {<InputError message={errors.cpf?.message ?? errors_backend?.cpf} className="mt-1" />}
                                </div>
                                <div className='col-span-3 md:col-span-2'>
                                    <label htmlFor="birth"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Data
                                        de Nascimento</label>
                                    <input
                                        type="date"
                                        id="birth"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        {...register('birth', { required: "O campo data de nascimento é obrigatório" })}
                                    />
                                    {<InputError message={errors.birth?.message ?? errors_backend?.birth} className="mt-1" />}
                                </div>
                                <div className='col-span-3 md:col-span-2'>
                                    <label htmlFor="gender"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gênero</label>
                                    <select
                                        id="gender"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        {...register('gender', { required: "O campo gênero é obrigatório" })}
                                    >
                                        <option value="">Selecione um gênero</option>
                                        <option value="masculino">Masculino</option>
                                        <option value="feminino">Feminino</option>
                                    </select>
                                    {<InputError message={errors.gender?.message ?? errors_backend?.gender} className="mt-1" />}
                                </div>
                                <div className='col-span-3'>
                                    <label htmlFor="cep"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cep</label>
                                    <input
                                        type="text" id="cep"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="71690000"
                                        {...register('address.cep', { required: "O campo cep é obrigatório" })}
                                    />
                                    {<InputError message={errors?.address?.cep?.message} className="mt-1" />}
                                </div>
                                <div className='col-span-3'>
                                    <label htmlFor="phone"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Telefone</label>
                                    <input
                                        type="text" id="phone"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="(99)99999-9999"
                                        {...register('address.phone', { required: "O campo telefone é obrigatório" })}
                                    />
                                    {<InputError message={errors?.address?.phone?.message} className="mt-1" />}
                                </div>
                            </div>

                            <div className="grid gap-6 mb-6 md:grid-cols-2 mt-6">
                                <div>
                                    <label htmlFor="neighborhood"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bairro</label>
                                    <input
                                        type="text"
                                        id="neighborhood"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        {...register('address.neighborhood', { required: "O campo bairro é obrigatório" })}
                                    />
                                    {<InputError message={errors?.address?.neighborhood?.message} className="mt-1" />}
                                </div>
                                <div>
                                    <label htmlFor="city"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cidade</label>
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
                                    {<InputError message={errors?.address?.city?.message} className="mt-1" />}
                                </div>
                            </div>
                            <div className="grid gap-6 mb-6 md:grid-cols-4 mt-6">
                                <div className='col-span-3'>
                                    <label htmlFor="complement"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Complemento</label>
                                    <input
                                        type="text"
                                        id="complement"
                                        className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Rua da ponte, 23..."
                                        {...register('address.complement')}
                                    />
                                </div>
                                <div className='col-span-1'>
                                    <label htmlFor="number"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número</label>
                                    <input
                                        type="text"
                                        id="number"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="23..."
                                        {...register('address.number')}
                                    />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="john.doe@company.com"
                                    {...register('email', { required: "O campo email é obrigatório" })}
                                />
                                {<InputError message={errors.email?.message ?? errors_backend?.email} className="mt-1" />}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="•••••••••"
                                    {...register('password', { required: "O campo senha é obrigatório" })}
                                />
                                {<InputError message={errors.password?.message ?? errors_backend?.password} className="mt-1" />}
                            </div>
                            <div className="mb-6">
                                <label htmlFor="confirm_password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar
                                    senha</label>
                                <input
                                    type="password"
                                    id="confirm_password"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="•••••••••"
                                    {...register('password_confirmation', { required: "O campo confirmar senha é obrigatório" })}
                                />
                                {<InputError message={errors.password_confirmation?.message ?? errors_backend?.password_confirmation} className="mt-1" />}
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
