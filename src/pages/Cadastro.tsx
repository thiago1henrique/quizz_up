//import Button from "../Components/Button.tsx";

import Inputs from "../Components/Inputs.tsx";
import Button from "../Components/Button.tsx";

const Cadastro = () => {
    return (
        <>
            <section className='flex w-full h-dvh'>
                <div className='flex justify-center flex-col w-full h-full pl-44'>
                    <h2 className='text-7xl font-bold'>Faça seu cadastro</h2>
                    <p className='text-2xl leading-10'>Para proseguir para a plataforma!</p>

                    <div className={'mt-10'}>
                        <Inputs label='Email' type='email' placheholder='Insira seu email'/>
                        <Inputs label='Senha' type='password' placheholder='Insira sua senha' classname='mt-4'/>

                        <div className={'mt-4'}>
                            <input type="checkbox" name="aceitarTermos" id="aceitarTermos"
                                   className="mr-2 cursor-pointer"/>
                            <span>Aceito termos da plataforma</span>
                        </div>

                        <div className={'mt-10'}>
                            <Button title={'Cadastrar'} onClick={() => alert('Cadastrar')}/>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 h-full'>
                    <img src="https://blog.pango.education/hubfs/Coding%20Blog%20Image.jpg"
                         className='w-full h-full object-cover pointer-events-none'
                         alt="coding"/>
                </div>
            </section>
        </>
    )
}

export default Cadastro