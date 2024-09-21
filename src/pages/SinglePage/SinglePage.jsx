import './singlepage.scss';
import Review from './../../components/Review/Review.jsx'
import { useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';
function SinglePage(){
useEffect(()=> {
window.scrollTo(0,0);
},[]);
const {post} = useLoaderData();
 return (
   <div className = "singlePage-container">
     <div className="singlePage-content">
        <div className="head">
          <h1>{post.title}</h1>
          <span>{`- by ${post.user.username}`}</span>
        </div>
        <img src={post.coverImage}/>
        <div dangerouslySetInnerHTML={{ __html: post.description.desc }}/>
        </div>
        <Review item={post.reviews}/>
   </div>
 )
}

export default SinglePage;