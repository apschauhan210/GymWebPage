import './App.css';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Home from './pages/Home';
import RegisterUser from './pages/RegisterUser';
import LoginUser from './pages/LoginUser';
import UserDetails from './pages/UserDetails';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Link to="/"> Home</Link>
        <br/>
        <Link to="/register">Join us</Link>
        <br/>
        <Link to="/login">Login</Link> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/register' element={<RegisterUser/>}/>
          <Route path='/user/:id' element={<UserDetails/>}/>
          <Route path='/login' element={<LoginUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
