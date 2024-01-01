
import './App.css';
import Header from './Component/HeaderComp';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
function App() {
  return (
    //https://colorlib.com/wp/template/capitalshop/
    <div className="App">
     <Header />
     <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/ContactUs" element={<ContactUs/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Projects" element={<Projects/>} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
