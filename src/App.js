import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages'
import SignInPage from './pages/signin'
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} exact /> 
        <Route path='/signin' element={<SignInPage/>} exact />
      </Routes>
    </Router>
  );
}

export default App;
