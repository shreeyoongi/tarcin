import Home from './Home';
import Login from './Login';
import Register from './Register';
import LandingPage from './LandingPage';
import Navbar from './navbar';
import TutorLogin from './tutorlogin';
import TutorRegister from './tutoregister';

import {BrowserRouter, Routes, Route} from "react-router-dom";

// Add these imports
import StudentDashboard from './StudentDashboard';
import TutorDashboard from './TutorDashboard';

function App() {
  return (
    <div style={{marginTop : '-3.5rem'}} >
      <BrowserRouter >
        <Navbar/>
        <Routes>
          <Route path="/" element ={<LandingPage/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/register/tutor" element ={<TutorRegister/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/login/tutor" element ={<TutorLogin/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/student/dashboard" element={<StudentDashboard/>} />
          <Route path="/tutor/dashboard" element={<TutorDashboard/>} />
          <Route path="/land" element ={<LandingPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
