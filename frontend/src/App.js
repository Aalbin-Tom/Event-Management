import './App.css';
import LoginP from './Pages/LoginP';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignupP from './Pages/SignupP';
import Home from './components/user/home/Home';



function App() {

  return (
    <div>

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login' element={<LoginP />} />
          <Route path='/signup' element={<SignupP />} />
        </Routes>
      </Router>



    </div >
  );
}

export default App;
