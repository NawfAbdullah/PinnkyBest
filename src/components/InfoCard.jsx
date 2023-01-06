import '../styles/InfoCard.css'

const InfoCard = ({title,description,imgUrl})=>{
   
    return <div className='info-card' >
        <img src={imgUrl} alt=""/>
        <h3>{title}</h3>
        <p>{description}</p>
        <button>
            Click to view Product
        </button>
    </div>
}

export default InfoCard