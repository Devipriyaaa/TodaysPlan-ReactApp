import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Addtodo from './pages/Addtodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path='/addtodo' element={<Addtodo/>}  />


        </Routes>




      </BrowserRouter>

      <Navbar />
    </div>
  );
}

export default App;
