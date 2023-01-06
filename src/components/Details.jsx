import '../styles/Details.css'

const Details = ({children,img})=>{
    return <div className="details">
            <img src={img} alt="" />
            <div className="paragraph">
                {children}
            </div>
        </div>
}

export default Details;