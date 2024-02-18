import React, {InputHTMLAttributes, useCallback} from "react"

import {cep, currency, cpf} from "@/lib/masks"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    mask: "cep" | "currency" | "cpf"
    prefix?: string;
}

const InputMask: React.FC<InputProps> = ({mask, ...props}) => {
    const handleChange = useCallback(
        (e: React.FormEvent<HTMLInputElement>) => {
            if (mask === "cep") {
                cep(e)
            }
            if (mask === "currency") {
                currency(e)
            }
            if (mask === "cpf") {
                cpf(e)
            }
        },
        [mask]
    )

    return (
        <div>
            <input
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                {...props} onChange={handleChange}
            />
        </div>
    );
};

export default InputMask
