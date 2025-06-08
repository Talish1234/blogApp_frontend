import './skeletion.scss';

function Skeletion(){
return (
    <div className="card-container">
        <div className='img-placeholder skeleton-line'></div>
        <div className="skeletion-content-contain">
            <div className='skeletion-date skeleton-line'></div>
            <h2 className='skeleton-line'></h2>
            <p className='skeleton-line'></p>
            <p className='skeleton-line'></p>
            <p className='skeleton-line'></p>
            <div className='skeletion-btn skeleton-line'></div>
        </div>
    </div>
)
}

export default Skeletion;