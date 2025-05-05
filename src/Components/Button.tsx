interface btnProps {
    title: string;
    onClick: () => void;
    disabled?: boolean;
}

const Button = ({ title, onClick, disabled = false }: btnProps) => {
    return (
        <button
            className={`
        w-[20rem] h-14 rounded-3xl cursor-pointer border-2
        ${disabled
                ? 'bg-gray-300 cursor-not-allowed border-transparent'
                : 'bg-green-300 hover:border-blue-600 border-transparent'
            }
      `}
            onClick={onClick}
            disabled={disabled}
        >
            {title}
        </button>
    );
};

export default Button;