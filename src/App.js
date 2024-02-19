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
import Statusbar from './pages/Statusbar';

function App() {
  return (
    <div className="h-screen bg-n0-repeat bg-cover bg-opacity-75 bg-[url('https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-colorful-gradient-dark-rose-texture-background-image_200630.jpg')] ">

      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/addtodo' element={<Addtodo />} />
          <Route path='/login' element={<Login />} />
          <Route path='/SigIn'element={<SigIn/>}/>
          <Route path='/statusbar'element={<Statusbar/>} />



        </Routes>

        <Footer />


      </BrowserRouter>

    </div>
  );
}

export default App;
