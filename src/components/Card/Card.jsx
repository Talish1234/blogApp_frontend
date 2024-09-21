import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import './card.scss';

function Card({item}){
return (
    <div className="card-container">
        <img src={item.coverImage}/>
        <div className="content-contain">
            <div className='date'>{format(item.createdAt)} . {item.catogries}</div>
            <h2>{item.title}</h2>
            <p>{item.summary.length <= '150'?item.summary:item.summary.slice(0,147)+"..."}</p>
            <Link to={`/singlePage/${item.id}`}>
            <button>Read More</button>
            </Link>
        </div>
    </div>
)
}

export default Card;