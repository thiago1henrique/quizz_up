import { useState } from 'react';
import Inputs from "../Components/Inputs.tsx";
import Button from "../Components/Button.tsx";
import {Link} from "react-router-dom";

const Cadastro = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        acceptedTerms: false
    });
    const [passwordError, setPasswordError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));

        // Validar senha em tempo real
        if (id === 'password') {
            validatePassword(value);
        }
    };

    const validatePassword = (password: string) => {
        const specialChars = /[!@#$%^&*(),.?":{}|<>]/;

        if (password.length < 6) {
            setPasswordError('A senha deve ter pelo menos 6 caracteres');
        } else if (!specialChars.test(password)) {
            setPasswordError('A senha deve conter pelo menos um caractere especial');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = () => {
        // Verificar novamente antes de submeter
        validatePassword(formData.password);

        if (!passwordError) {
            alert(`Cadastro realizado com: ${formData.email}`);
        }
    };

    const isFormValid =
        formData.email.trim() !== '' &&
        formData.password.trim() !== '' &&
        formData.acceptedTerms &&
        !passwordError;

    return (
        <section className='flex w-full h-dvh px-4 sm:px-0'>
            <div className='flex justify-center items-center sm:items-start flex-col sm:pr-4 sm:w-1/2 h-full sm:pl-44'>
                <h2 className='text-7xl font-bold text-center sm:text-start' style={{fontFamily: '"Jersey 10"'}}>Faça seu cadastro</h2>
                <p className='text-2xl leading-10'>Para proseguir para a plataforma!</p>
                <p>Já tem uma conta? <Link to={"/Login"} className={"font-bold"}>Logue aqui</Link></p>

                <div className='mt-10'>

                    <Inputs
                        label='Nome'
                        type='text'
                        placeholder='Insira seu nome'
                        id="nome"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <Inputs
                        label='Email'
                        type='email'
                        placeholder='Insira seu email'
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <div className={'w-full h-20'}>
                        <Inputs
                            label='Senha'
                            type='password'
                            placeholder='Insira sua senha (mínimo 6 caracteres com um especial)'
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                    </div>

                    <div className='mt-4'>
                        <input
                            type="checkbox"
                            id="acceptedTerms"
                            checked={formData.acceptedTerms}
                            onChange={handleChange}
                            className="mr-2 cursor-pointer"
                        />
                        <span>Aceito termos da plataforma</span>
                    </div>

                    <div className='mt-10 flex justify-center sm:justify-start'>
                        <Button
                            title='Cadastrar'
                            onClick={handleSubmit}
                            disabled={!isFormValid}
                        />
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-full hidden sm:block'>
                <img
                    src="https://blog.pango.education/hubfs/Coding%20Blog%20Image.jpg"
                    className='w-full h-full object-cover pointer-events-none'
                    alt="coding"
                />
            </div>
        </section>
    );
};

export default Cadastro;