import { useContext, useState } from 'react';
import './review.scss';
import { TbSend2 } from "react-icons/tb";
import apiRequest from "./../../lib/apiRequest.js";

import { AuthContext } from '../../context/authContext.jsx';
import { useNavigate, useParams } from 'react-router-dom';

function Review({item}){
 const {currentUser} = useContext(AuthContext);
 const [review,setReview] = useState(item);
 const {id} = useParams();
 const navigate = useNavigate();

 const handleClick = async e => {
   e.preventDefault();
   const formData = new FormData(e.target);
   const text = formData.get('text');
   try {
      const data = await apiRequest.post('/review/'+id,{text});
      setReview(prev => ([{
         id:data.data.data.id,
         text:data.data.data.text,
         user:{
            profile:currentUser.profile,
            username:currentUser.username
         }
      },...prev]))
      
   } catch (error) {
      navigate('/login');
   }
 }
 return (
    <div className="review-container">
         <form  onSubmit={handleClick}>
            <input type = 'text' name='text' placeholder = "Comment"/>
            <button className='send'><TbSend2/></button>
         </form>
         <div className="reviews">
           {review.map( (item) => (<div className='container'>
            <img src={item.user.profile}/>
            <div>
            <span style={{opacity:'0.6',fontStyle:'italic',fontSize:'1rem'}}>{`@${item.user.username}`}</span>
            <span>{item.text}</span>
            </div>
            </div>))}
         </div>
    </div>
 )
}

export default Review;