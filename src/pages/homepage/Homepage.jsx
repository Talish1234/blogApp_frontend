import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";
import Categories from "../../components/Categories/Categories";
import Cover from "../../components/Cover/Cover";
import EditorCard from "../../components/TrendingCard/EditorCard.jsx";
import TrendingCard from "../../components/TrendingCard/TrendingCard.jsx";
import './homepage.scss';
import { useState } from "react";
import apiRequest from "../../lib/apiRequest.js";
function HomePage(){
  const color = ["#EECAD5","#F6EACB","#F1D3CE","#D1E9F6"];
  const {topPost,user,post} = useLoaderData();
  const [pagePost,setPagePost] = useState(post);
  const [page,setPage] = useState(1);
  const handlePreview = async (e) => {
  e.preventDefault();
  if(page == 1)
  return ;
  try{
  const newPost = await apiRequest.get('/post?page='+(page+-1))
  setPage(prev => (prev-1));
  setPagePost(newPost.data.data);
  }catch(error){
  
  }
  }
  const handleNext = async (e) => {
    e.preventDefault();
    if(pagePost.length < 2)
    return ;
    try{
    const newPost = await apiRequest.get('/post?page='+(page+1))
    if(newPost.data.data.length == 0)
    return ;
    setPage(prev => (prev+1));
    setPagePost(newPost.data.data);
    }catch(error){
    }
  }
 return (
    <div className="home-container">
       <Cover/>
       <Categories key={'0'}/>
       <div className="post-container">
         <div className="left-container">
             <span>Post</span>
             {pagePost.map((item) => (<Card item={item} key={item.id}/>))}
             <div className="paging">
              <button onClick={handlePreview}>Previous</button>
              <span>{page}</span>
              <button onClick={handleNext}>Next</button>
             </div>
         </div>
         <div className="right-container">
             <span>Trending</span>
             {topPost.map( (item,index) => (<TrendingCard item={item} key={item.id+'a'} color={color[index%4]}/>))
             }
             <Categories key={'1'}/>
             <span>Top Editors</span>
             {user.map( (item,index) => (<EditorCard item={item} key={item.id+'b'} color={color[index%4]}/>))
             }
         </div>
       </div>
    </div>
 )
}

export default HomePage;