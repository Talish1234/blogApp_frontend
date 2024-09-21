import Card from '../../components/Card/Card.jsx';
import './Profile.scss';
import { useContext, useState } from 'react';
import UploadWidget from '../../components/UploadWidget/UploadWidget.jsx';
import { AuthContext } from './../../context/authContext.jsx'
import { Link, useLoaderData } from 'react-router-dom';
import apiRequest from '../../lib/apiRequest.js';
import Loader from '../../components/loader/loading.jsx';
import {toast} from 'react-toastify';

function Profile(){
   
    const {currentUser,updateUser} = useContext(AuthContext);
    const [profile,setProfile] = useState(currentUser.profile);
    const {post} = useLoaderData();
    const [loading,setloading] = useState(false);

    const [data,setData] = useState({
        username:currentUser.username,
        bio:currentUser.bio,
        location:currentUser.location
    });
  
    const handleChange = e => {
        e.preventDefault();
    setData(prev => ({
        ...prev,
        [e.target.name]:e.target.value
    }
    ))
    } 
    
    const handleSubmit = async e => {
        e.preventDefault();
        try{
        setloading(true);
        const formData = new FormData(e.target);
        const date = formData.get('date');
        const password = formData.get('password');
        const post = await apiRequest.put('/user',{
            username:data.username,
            bio:data.bio,
            location:data.location,
            profile,
            ...(password && {password}),
            ...(date && {date})
        })
        toast.success('Update Successfully');
    }catch(error){
        toast.error('Something went wrong');
    }
    finally{
        setloading(false);
    }
    }
    return (
        <div className="mypost-container">
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
       <div className="container">
        <div>
        <label>Username</label>
        <input type="text" name = "username" placeholder="@example" value={data.username} onChange={handleChange}/>
        </div>
        <div>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password"/>
        </div>
        </div>
        <label>Bio</label>
        <textarea name="bio" placeholder="Enter bio" style={{height:'6rem',width:'100%'}} value={data.bio} onChange={handleChange}/>
    
        <div className="container">
        <div>
        <label>Location</label>
        <input type='text' name='location' value={data.value} onChange={handleChange}/>
        </div>
        <div>
        <label>Birth Date</label>
        <input type='date' name='date'/>
        </div>
        </div>
    
        <button>Save</button>
     </form>
            </div>
            <div className="banner">
                <h1>
                    {`My Posts`}
                </h1>
                <button>
                    <Link to='/create-post'>Create Post</Link>
                </button>
            </div>
            <div className="cards">
              {post.map((item) => (<Card item={item} key={item.id}/>))}
            </div>
        </div>
    )
}

export default Profile;