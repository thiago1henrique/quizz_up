import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Inputs from "../Components/Inputs.tsx";
import Button from "../Components/Button.tsx";

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
        setError(''); // Limpa erros ao digitar
    };

    const handleLogin = async () => {
        if (!isFormValid) return;

        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:3000/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Credenciais inválidas');
            }

            const userData = await response.json();

            // Armazena os dados do usuário (EM PRODUÇÃO, USE CONTEXT/STORAGE SEGURO)
            localStorage.setItem('user', JSON.stringify(userData));

            navigate('/home');
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Ocorreu um erro desconhecido');
        } finally {
            setIsLoading(false);
        }
    };

    const isFormValid = formData.email.trim() !== '' && formData.password.trim() !== '';

    return (
        <section className='flex w-full h-dvh px-4 sm:px-0'>
            <div className='flex justify-center flex-col items-center sm:pr-4 sm:items-start sm:w-1/2 h-full sm:pl-44'>
                <h2 className='text-7xl font-bold text-center sm:text-start' style={{fontFamily: '"Jersey 10"'}}>Faça seu login</h2>
                <p className='text-2xl leading-10'>Para proseguir para a plataforma!</p>
                <p>Não tem uma conta? <Link to={"/Cadastro"} className={"font-bold"}>Crie uma</Link></p>

                <div className='mt-10'>
                    {error && <p className="text-red-500 mb-4">{error}</p>}

                    <Inputs
                        id="email"
                        label='Email'
                        type='email'
                        placeholder='Insira seu email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <Inputs
                        id="password"
                        label='Senha'
                        type='password'
                        placeholder='Insira sua senha'
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <div className='mt-10 flex justify-center sm:justify-start'>
                        <Button
                            title={isLoading ? 'Carregando...' : 'Login'}
                            onClick={handleLogin}
                            disabled={!isFormValid || isLoading}
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