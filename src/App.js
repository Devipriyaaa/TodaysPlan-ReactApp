import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Addtodo from './pages/Addtodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';

function App() {
  return (
    <div className="h-screen bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs7NB_wDPuL_HCf5PMoivtqik9azuf6TnJnw&usqp=CAU')">



      <BrowserRouter>
      {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<Mainpage />} />
          <Route path='/addtodo' element={<Addtodo />} />



        </Routes>




      </BrowserRouter>

    </div>
  );
}

export default App;
