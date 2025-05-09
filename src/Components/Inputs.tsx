import { useState } from 'react';

interface InputsProps {
    label: string;
    type: string;
    placeholder: string;
    id?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    classname?: string;
}

const Inputs = ({
                    label,
                    type,
                    placeholder,
                    id,
                    value,
                    onChange,
                    classname
                }: InputsProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative mt-6">
            <input
                id={id}
                className={`peer w-full min-w-[360px] sm:min-w-[500px] max-w-[600px] py-4 pl-4 pr-10 border-2 bg-[#f5f5f5]
                 border-[#16161d] rounded-2xl placeholder-transparent focus:outline-none ${classname}`}
                type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
            <label
                htmlFor={id}
                className={`absolute left-4 -top-2 px-1 bg-[#f5f5f5] text-sm font-bold
                          transition-all duration-200
                          peer-placeholder-shown:text-base 
                          peer-placeholder-shown:top-4 
                          peer-placeholder-shown:text-gray-500
                          peer-focus:-top-2 
                          peer-focus:text-sm
                          peer-focus:text-[#16161d]
                          ${classname}`}
            >
                {label}
            </label>

            {type === 'password' && (
                <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                >
                    {showPassword ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    )}
                </button>
            )}
        </div>
    );
};

export default Inputs;