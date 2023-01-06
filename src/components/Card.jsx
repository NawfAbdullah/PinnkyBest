import '../styles/Card.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const Card = ({title,image,qty,price,fake,description})=>{
    return <div className="card">
        <div className="badge">SALE</div>
        <div className="imgBx">
            <img className="por-1" src={image} alt={title} />
        </div>
        <div className="content">
            <h2>{title}</h2><br/>
            <p  className="break">
                QUANTITY: {qty} Pcs
            </p>
            <div className="product-bottom-details">
                <div className="product-price"><small> ₹{fake} </small> ₹{price}</div>
                <div className="product-price"><br/>{description}</div>
                <div className="product-links">
                    <a href=""><FavoriteIcon /></a>
                    <a href=""><ShoppingCartIcon /></a>
                </div>
            </div>
        </div>
    </div>
}

export default Card