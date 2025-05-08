import { useState } from 'react';
import Inputs from "../Components/Inputs.tsx";
import Button from "../Components/Button.tsx";

const Cadastro = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        acceptedTerms: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = () => {
        alert(`Cadastro realizado com: ${formData.email}`);
    };

    const isFormValid =
        formData.email.trim() !== '' &&
        formData.password.trim() !== '' &&
        formData.acceptedTerms;

    return (
        <section className='flex w-full h-dvh'>
            <div className='flex justify-center flex-col w-full h-full pl-44'>
                <h2 className='text-7xl font-bold' style={{fontFamily: '"Jersey 10"'}}>Faça seu cadastro</h2>
                <p className='text-2xl leading-10'>Para proseguir para a plataforma!</p>

                <div className='mt-10'>
                    <Inputs
                        label='Email'
                        type='email'
                        placeholder='Insira seu email'
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Inputs
                        label='Senha'
                        type='password'
                        placeholder='Insira sua senha'
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                    />

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

                    <div className='mt-10'>
                        <Button
                            title='Cadastrar'
                            onClick={handleSubmit}
                            disabled={!isFormValid}
                        />
                    </div>
                </div>
            </div>
            <div className='w-1/2 h-full'>
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