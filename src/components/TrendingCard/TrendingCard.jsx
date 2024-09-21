import { Link } from 'react-router-dom';
import {format} from 'timeago.js';

function TrendingCard({item,color}){
return (
    <div className="card-container">
        <Link to={`/singlePage/${item.id}`}>
        <div className="content-contain"> 
            <div className='categories-box' style={{backgroundColor:color}}>{item.catogries}</div>
            <h2>{item.title}</h2>
            <div>{item.user.username} . {format(item.createdAt)}</div>
        </div>
        </Link>
    </div>
)
}

export default TrendingCard;