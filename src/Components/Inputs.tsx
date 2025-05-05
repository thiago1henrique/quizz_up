interface inputssProps {
    label: string;
    type: string;
    placheholder: string;
    classname?: string;
}

const Inputs = ({label, type, placheholder, classname}: inputssProps) => {
    return (
        <>
            <div>
                <label className={`block font-bold pb-2 ${classname}`} htmlFor={label}>{label}</label>
                <input className={`w-full max-w-[600px] py-4 pl-4 border-2 border-[#16161d] rounded-2xl`} type={type} placeholder={placheholder}/>
            </div>
        </>
    )
}

export default Inputs