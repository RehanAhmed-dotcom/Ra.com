import React,{useState} from 'react'
import '../main.css'
import { MdMenu } from "react-icons/md";

const HeaderComp = () => {
  const [show,setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  return (
    <div className='headerStyle'>
      <h2>RA.com</h2>
      <div className='rightSideHeader'>
        <span >Home</span>
        <span>Products</span>
        <span>Projects</span>
        <span>Category</span>
        <span>About us</span>
      </div>
      <div className='menu'>
      <MdMenu onClick={()=>setShow(!show)}/>
      </div>
      {show &&  <div className='visibleMenu'>
        <div>
          Home
        </div>
        <div>
          Products
        </div><div>
          Projects
        </div><div>
          Category
        </div><div>
          About us
        </div>
     

      
    </div>}
    </div>
    
  )
}

export default HeaderComp;