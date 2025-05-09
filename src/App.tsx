import './App.css';
import './index.css'

import { Routes, Route, Navigate } from 'react-router-dom';
import Cadastro from "./pages/Cadastro.tsx";
import Splash from "./pages/Splash.tsx";
import Login from "./pages/Login.tsx";


function App() {
    return (
        <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

export default App;