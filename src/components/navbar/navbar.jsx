import './navbar.scss'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Squash as Hamburger } from 'hamburger-react'
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import apiRequest from '../../lib/apiRequest';
function Navbar(){
  const {updateUser,currentUser} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async (e) =>{
    e.preventDefault();
    try{ 
    await apiRequest.get('user/auth/logout');
    updateUser(null);
    navigate('/');
    }catch(err){
    }
  }
  const [open,setOpen] = useState({
    active:false,
    color:'black'
  });

const handleOpen = () => {
  const color = open.color == 'black'?'white':'black';
  setOpen({active:!open.active , color});
}
    return (
        <nav className = "navbar">
         <div className='container'>
           <div className = "icons">
           <a href='https://www.linkedin.com/in/mohd-talish-ansari-a8a05b234/' target='_black'><FaLinkedin/></a>
                 <a href='https://x.com/talishtarik1234' target='_black'><FaXTwitter/></a>
                 <a href='https://github.com/Talish1234' target='_black'><FaGithub/></a>
                 <a href='https://leetcode.com/u/Talish1234/' target='_black'><SiLeetcode/></a>
                 
           </div>
           <div className="logo">
             <strong>B</strong>logBytes
           </div>
           <div className="navigation">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              {currentUser?<>
                
                <Link to="/create-post">Post</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/" onClick={handleLogout}>Logout</Link>
              </>:
                <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
              </>
               } 
           </div>
           
              <div className={open.active?"menu active":"menu"} onClick={handleOpen}>
               <Hamburger color={open.color}/>
              </div>
                <div className={open.active?"menuList active":"menuList"}>
                
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
               {currentUser?<>
                
                <Link to="/create-post">Post</Link>
                <Link to="/profile">Profile</Link>
                <Link to="/" onClick={handleLogout}>Logout</Link>
              </>:
                <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
              </>
               } 
                <div className = "icons">
                 <a href='https://www.linkedin.com/in/mohd-talish-ansari-a8a05b234/' target='_black'><FaLinkedin/></a>
                 <a href='https://x.com/talishtarik1234' target='_black'><FaXTwitter/></a>
                 <a href='https://github.com/Talish1234' target='_black'><FaGithub/></a>
                 <a href='https://leetcode.com/u/Talish1234/' target='_black'><SiLeetcode/></a>
                 </div>
                </div>
             
         </div>
        </nav>
    )
}

export default Navbar;