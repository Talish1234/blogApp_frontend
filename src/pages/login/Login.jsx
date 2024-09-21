import { useContext, useState } from 'react';
import {useNavigate} from 'react-router-dom';
import './login.scss';
import apiRequest from '../../lib/apiRequest';
import { AuthContext } from '../../context/authContext';
import Loader from '../../components/loader/loading';
import { toast } from 'react-toastify';

function Login (){

const [error,setError] = useState('');
const navigate = useNavigate();
const {updateUser} = useContext(AuthContext);
const [loading,setloading] = useState(false);
const handleSubmit = async (e) => {
    try{     
    e.preventDefault();
    setloading(true);
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    const data = await apiRequest.post('/user/auth',{username,password});
    updateUser(data.data.user);
    toast.success('Login Successfully')
    navigate('/')
}catch(err){
    setloading(false);
    toast.error('User not found');
}
}   
return (
    <div className="Login-container" >
        {loading && <Loader/>}
        <div className="inner-register-container" >
         <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" name = "username" placeholder="@example" min='3' max='50' required/>
        <label>Password</label>
        <input type="password" name="password" placeholder="Password" min="8" required/>
        <span style={{color:'red'}}>{error}</span>
        <button>Save</button>
     </form>
    </div>
    </div>
)
}

export default Login;