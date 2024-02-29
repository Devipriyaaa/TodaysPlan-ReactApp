import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Addtodo from './pages/Addtodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import SigIn from './pages/SigIn';
import Button from './components/Button';

function App() {
  return (
    <div className="h-screen bg-n0-repeat bg-cover bg-black">

      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/addtodo' element={<Addtodo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/SigIn'element={<SigIn/>}/>
          <Route path='/Button'element={<Button/>}/>



        </Routes>

        {/* <Footer /> */}


      </BrowserRouter>

    </div>
  );
}

export default App;
