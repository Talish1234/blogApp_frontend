
import './trendingCardSkeletion.scss';

function EditorCardSkeletion(){
return (
   <div className="card-container Editor-card-container">
        <div className='image-placeholder skeleton-line'></div>
        <div className="skeletion-content-contain">
            <div className='skeletion-date skeleton-line'></div>  
            <p className='skeleton-line'></p>
            <div className='skeletion-date skeleton-line'></div>
        </div>
    </div>
)
}

export default EditorCardSkeletion;