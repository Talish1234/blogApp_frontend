import { Link } from 'react-router-dom';
import { format } from 'timeago.js';
import './editorcard.scss';

function EditorCard({item,color}){
return (
    <div className="Editor-card-container">
        <Link to={`/EditorPost/${item.username}/${item.id}`}>
        <div className="image-container">
          
        <img src={item.profile}/>
        </div>
        <div className="content-contain"> 
             
            <div className='categories-box' style={{backgroundColor:color}}>{item.date}</div>
            <h2>{item.bio}</h2>
            <div className='date'>{item.username} . {format(item.createdAt)}</div>
        </div>
        </Link>
    </div>
)
}

export default EditorCard;