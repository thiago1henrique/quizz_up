import Button from "../Components/Button.tsx";

const Splash = () => {
    return (
        <section className='flex w-full h-dvh'>
            <div className='flex items-center justify-center flex-col w-full h-full'>
                <h2 className='text-7xl font-bold'>Bem vindo ao Quizz Up</h2>
                <p className='text-2xl leading-32'>Aprender ficou mais fácil do que você imagina!</p>

                <div className='flex flex-col gap-4'>
                    <Button title="Login" onClick={() => alert('Login')}/>
                    <Button title="Cadastro" onClick={() => alert('Cadastro')}/>
                </div>
            </div>
            <div className='w-1/2 h-full'>
                <img src="https://blog.pango.education/hubfs/Coding%20Blog%20Image.jpg"
                     className='w-full h-full object-cover pointer-events-none'
                     alt="coding"/>
            </div>
        </section>
    )
}

export default Splash