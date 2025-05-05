interface btnProps {
    title: string;
    onClick: () => void;
}

const Button = ({title, onClick}: btnProps) => {
    return (
        <>
            <button className="w-[20rem] h-14 bg-green-300 rounded-3xl cursor-pointer
            border-2 border-transparent hover:border-blue-600" onClick={onClick}>{title}</button>
        </>
    )
}

export default Button