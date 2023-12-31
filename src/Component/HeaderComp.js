import React, { useEffect, useRef, useState } from "react";
import "../main.css";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
const HeaderComp = () => {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("option1");
  const triggerRef = useRef(null); // optional
  const nodeRef = useRef(null); // required
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleClickOutside = (event) => {
    //if click is on trigger element, toggle modal
    if (triggerRef.current && triggerRef.current.contains(event.target)) {
      return setShow(!show);
    }
    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
      return setShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);
  //      useEffect(() => {
  //       document.addEventListener("click", handleClickOutside, true);
  //       return () => {
  //       document.removeEventListener("click", handleClickOutside, true);
  //      };
  //     });
  //  return {
  //     triggerRef,
  //     nodeRef,
  //     show,
  //     setShow
  //     }
  //   }
  return (
    <div className="headerStyle">
      <Link to="/">
        <h2>RA.com</h2>
      </Link>
      <div className="rightSideHeader">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/Projects">
          <span>Projects</span>
        </Link>
        <Link to="/Login">
          <span>Login</span>
        </Link>
        <Link to="/Profile">
          <span>Profile</span>
        </Link>
        <Link to="/ContactUs">
          <span>Contact us</span>
        </Link>
      </div>
      <div className="menu">
        <MdMenu onClick={() => setShow(!show)} />
      </div>
      {show && (
        <div className="visibleMenu">
          <div>
            <Link to="/">Home</Link>
          </div>
          <div>
            <Link to="/Projects">Projects</Link>
          </div>
          <div>
            <Link to="/Login">Login</Link>
          </div>
          <div>
            <Link to="/Profile">Profile</Link>
          </div>
          <div>
            <Link to="/ContactUs">Contact Us</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderComp;
