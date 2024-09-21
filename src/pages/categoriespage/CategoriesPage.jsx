import './categoriesPage.scss';
import { useLoaderData, useParams } from 'react-router-dom'
import Card from '../../components/Card/Card';
import { useEffect } from 'react';

function CategoriesPage({}){
    const {id}= useParams();
    const {post} = useLoaderData();
    useEffect(()=> {
        window.scrollTo(0,0);
        },[]);
    return (
        <div className="categoriesPage-container">
            <div className="banner">
                <h1>
                    {id}
                </h1>
            </div>
            <div className="cards">
              { post.map((item,index) => (<Card item={item} key={index}/>))}
            </div>
        </div>
    )
}

export default CategoriesPage;