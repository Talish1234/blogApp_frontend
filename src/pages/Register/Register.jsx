import { useState } from 'react';
import {useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';
import UploadWidget from '../../components/UploadWidget/UploadWidget';
import apiRequest from '../../lib/apiRequest.js';
import './register.scss';
import Loader from '../../components/loader/loading.jsx';

function Register (){
    const [profile,setProfile] = useState(null);
    const navigate = useNavigate();
    const [loading,setloading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
         setloading(true);
         const formData = new FormData(e.target);
         const input = Object.fromEntries(formData);
         
         const data = await apiRequest.post('/user',{
            username:input.username,
            email:input.email,
            password:input.password,
            date:input.date,
            ...(profile && {profile}),
            ...(input.bio && {bio:input.bio}),
            ...(input.location && {location:input.location}),
         });
         toast.success('Register Successfully')
         navigate('/login');
        }catch(error){
         setloading(false);
         toast.error('Username is already present');
        
        }
    }


return (
    <div className="register-container" >
        {loading && <Loader/>}
        <div className="inner-register-container" >
         <div className="profile-container" style={{backgroundImage:`url(${profile})`}}>
         <UploadWidget uwConfig={{
    cloudName: "dwvvhxbgy",
    uploadPreset: "blogApp",
    multiple: false,
    maxImageFileSize: 2000000,
    folder: "profile",
  }} setProfile={setProfile} className="widget"/>
  
        </div>
     <form onSubmit={handleSubmit}>
       
        <label>Username</label>
        <input type="text" name = "username" placeholder="@example" required/>
        <label>Email</label>
        <input type="email" name="email" placeholder="example@gmail.com" required/>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" required/>
        <label>Bio</label>
        <textarea name="bio" placeholder="Enter bio" style={{height:'6rem'}}/>
        <label>Location</label>
        <input type='text' name='location'/>
        <label>Birth Date</label>
        <input type='date' name='date' required/>
        <button>Save</button>
     </form>
    </div>
    </div>
)
}

export default Register;