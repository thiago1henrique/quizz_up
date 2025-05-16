import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './pages/Menu';
import Quiz from './pages/Quiz';


function App() {

  return (
     <Routes>
            <Route path="/menu" element={<Menu />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
  
}

export default App
