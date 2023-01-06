import '../styles/Footer.css'
import LOGO from '../assets/LOGO.png'
import { Phone } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';

const Footer = ()=>{
    return <><div className="footer">
    <div className="inner-footer">
  
      <div className="footer-items">
        <h1>PINNKY BEST</h1>
        <p> We have Economy, Standard and premium segment in most of our products. We can offer all this in bulk quantity and in smaller packaging.
            At Pinnky Best™ organization, we understand the need to meet the growing requirements of consumers </p>
      </div>
 
      <div className="footer-items">
        <h3>Quick Links</h3>
        <div className="border1"></div>
          <ul>
            <a href="/home"><li>Home</li></a>
            <a href="/napkin"><li>Napkins</li></a>
            <a href="/phenyl"><li>Home Disinfectants</li></a>
            <a href="https://www.google.com/maps?q=11.6891946,78.0799136&z=17&hl=en"><li>Map</li></a>
          </ul>
      </div>
  
      <div className="footer-items" id="CONTACT US">
        <h3>Contact us</h3>
        <div className="border1"></div>
          <ul>
            <li><a href="tel:+9188778729216"><Phone /> 88778729216</a></li>
            <li><a href="tel:+919443307677"><Phone /> 9443307677</a></li>
            <li><a href="tel:+918345290969"><Phone /> 8345290969</a></li>
            <li> <a href='mailto:pinnkybest@gmail.com'><EmailIcon /> pinnkybest@gmail.com</a></li>
          </ul>
        </div> 
      </div>
      <div className="social-media">
        <img src={LOGO} width="100px;"/>
      </div> 
  </div>
    
    <div className="footer-bottom">
      Copyright &copy; Pinnky best 2022.
    </div>
  </>
}

export default Footer