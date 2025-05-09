import { useState } from 'react';
import Inputs from "../Components/Inputs.tsx";
import Button from "../Components/Button.tsx";
import {Link} from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleLogin = () => {
        alert('Login realizado com: ' + formData.email);

    };

    const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

    return (
        <section className='flex w-full h-dvh'>
            <div className='flex justify-center flex-col items-center sm:items-start w-full h-full sm:pl-44'>
                <h2 className='text-7xl font-bold' style={{fontFamily: '"Jersey 10"'}}>Faça seu login</h2>
                <p className='text-2xl leading-10'>Para proseguir para a plataforma!</p>
                <p>Não tem uma conta? <Link to={"/Cadastro"} className={"font-bold"}>Crie uma</Link></p>


                <div className='mt-10'>
                    <Inputs
                        label='Email'
                        type='email'
                        placeholder='Insira seu email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Inputs
                        label='Senha'
                        type='password'
                        placeholder='Insira sua senha'
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <div className='mt-10'>
                        <Button
                            title={'Login'}
                            onClick={handleLogin}
                            disabled={!isFormValid}
                        />
                    </div>
                </div>
            </div>

            <div className='w-1/2 h-full hidden sm:block'>
                <img
                    src="https://blog.pango.education/hubfs/Coding%20Blog%20Image.jpg"
                    className='hidden sm:block w-full h-full object-cover pointer-events-none'
                    alt="coding"
                />
            </div>
        </section>
    );
};

export default Login;