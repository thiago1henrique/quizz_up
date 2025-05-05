interface InputsProps {
    label: string;
    type: string;
    placeholder: string;
    id: string;
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
    return (
        <div className="relative mt-6">
            <input
                id={id}
                className={`peer w-full max-w-[600px] py-4 pl-4 border-2 border-[#16161d] rounded-2xl placeholder-transparent focus:outline-none ${classname}`}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange} // Esta linha é crucial
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
        </div>
    );
};

export default Inputs;