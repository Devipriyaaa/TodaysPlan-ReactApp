import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Addtodo from './pages/Addtodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';

function App() {
  return (
    <div className="h-screen bg-black">



      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/addtodo' element={<Addtodo />} />



        </Routes>

        <Footer />


      </BrowserRouter>

    </div>
  );
}

export default App;
