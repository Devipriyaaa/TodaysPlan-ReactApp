import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import Addtodo from './pages/Addtodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';

function App() {
  return (
    <div className=" bg-[url('https://m.media-amazon.com/images/I/61tziSbwywL')] ">




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
