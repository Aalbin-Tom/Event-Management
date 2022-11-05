import './App.css';
import LoginP from './Pages/LoginP';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignupP from './Pages/SignupP';
import HomeP from './Pages/HomeP';
import UserProfile from './components/user/UserProfile';
import AdminLogin from './components/admin/AdminLogin';
import AdminHome from './components/admin/AdminHome';
import Dashboard from './components/admin/Dashboard';
import AdminUserlist from './components/admin/AdminUserlist';
import AdminBusiness from './components/admin/AdminBusiness';


function App() {

  return (
    <div>

      <Router>
        <Routes>
          <Route exact path='/' element={<HomeP />} />
          <Route path='/login' element={<LoginP />} />
          <Route path='/signup' element={<SignupP />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/admin/login' element={<AdminLogin />} />
          <Route path='/admin' element={<AdminHome />} >
            <Route path='/admin/dashboard' element={<Dashboard />} />
            <Route path='/admin/users' element={<AdminUserlist />} />
            <Route path='/admin/business' element={<AdminBusiness/>} />
          </Route>
        </Routes>
      </Router> 



    </div >
  );
}

export default App;
