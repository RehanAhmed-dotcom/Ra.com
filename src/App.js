
import './App.css';
import { useState } from 'react';
import Header from './Component/HeaderComp';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Profile from './pages/Profile';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import ProjectsDetail from './pages/ProjectsDetail';
function App() {
  const [user,setUser] = useState({});
  const checkEmptyObject = (user)=>{
    if(Object.keys(user).length>0){
      return true;
    }
    else{
      return false;
    }
  }
  console.log('user in app',checkEmptyObject(user)?"is Found":"not Found")
  
  return (
    //https://colorlib.com/wp/template/capitalshop/
    <div className="App">
     <Header />
     <Routes>
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/ContactUs" element={<ContactUs/>} /> */}
        {!checkEmptyObject(user) && <Route path="/Login" element={<Login/>} />}
        {checkEmptyObject(user) && <Route path="/Projects" element={<Projects/>} />} 
       {/* <Route path="/Projects/:slug" element={<ProjectsDetail />}/>
        <Route path="*" element={<NotFound />} /> */}

      </Routes>
    </div>
  );
}

export default App;
