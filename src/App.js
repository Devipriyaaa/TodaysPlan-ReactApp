import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Addtodo from './pages/Addtodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Forms from './pages/SigIn';
import SigIn from './pages/SigIn';

function App() {
  return (
    <div className=" bg-opacity-75 bg-[url('https://wallpapers.com/images/hd/solid-pink-background-2obrm4zdhnpqrypd.jpg')] ">

      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/addtodo' element={<Addtodo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/SigIn'element={<SigIn/>}/>



        </Routes>

        <Footer />


      </BrowserRouter>

    </div>
  );
}

export default App;
