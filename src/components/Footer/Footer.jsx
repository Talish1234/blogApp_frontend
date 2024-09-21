import { useContext, useState } from 'react';
import './footer.scss'
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from '../../context/authContext';
import apiRequest from "./../../lib/apiRequest.js";

function Footer(){
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
    return (
      <footer>
        <div className='footer-content'>
           <div className="left-footer-container">
            
           <div className="user-info">
            <img src='profile.jpg'/>
            <span>Mohd Talish Ansari</span>
            </div>
            <p>Hi, I’m Mohd Talish Ansari, a passionate web developer and college student at ADGITM, where I’m currently pursuing my education. I specialize in full-stack development with expertise in MERN, C, C++, Java, and Python. I enjoy exploring the latest technologies and building practical solutions through coding.</p>
            <a href='https://www.linkedin.com/in/mohd-talish-ansari-a8a05b234/' target='_black'><FaLinkedin/></a>
            <a href='https://x.com/talishtarik1234' target='_black'><FaXTwitter/></a>
            <a href='https://github.com/Talish1234' target='_black'><FaGithub/></a>
            <a href='https://leetcode.com/u/Talish1234/' target='_black'><SiLeetcode/></a>
           </div>
           <div className="right-footer-container">
             <div className="links">
              Link
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
             <div className="socials">
                Social
             <a href='https://www.linkedin.com/in/mohd-talish-ansari-a8a05b234/' target='_black'>Linkedin</a>
            <a href='https://x.com/talishtarik1234' target='_black'>Twitter</a>
            <a href='https://github.com/Talish1234' target='_black'>Github</a>
            <a href='https://leetcode.com/u/Talish1234/' target='_black'>Leetcode</a>
             </div>
           </div>
        </div>
        
      </footer>
             
        
    )
}

export default Footer;