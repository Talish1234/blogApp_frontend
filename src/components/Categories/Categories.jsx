import './categories.scss';
import { Link } from 'react-router-dom';
function Categories () {
    const color = ['#D1E9F6','#F1D3CE','#F6EACB','#EECAD5'];
    const categories = {
      categories:["Fashion","Food","Coding","Style","Travel","Culture","Entertainment","Technology"]
  }
 return (
    <div className="categories-container">
    <span>Popular Categories</span>
    <div className="box-container">
    {categories.categories.map((item,index) => (<div style={{ backgroundColor: color[index % 4] }} className="box"><Link to={`/categories/${item}`}>{item}</Link></div>))}
    </div>
    </div>                                                                                  
 )
}

export default Categories;