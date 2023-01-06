import InfoCard from '../components/InfoCard'
import '../styles/Home.css'
import PAD from '../assets/product/pad.jpeg'
import Soap from '../assets/product/soap2.jpg'
import Carousel from "framer-motion-carousel";
import Napkin from '../assets/sanitarypad2.jpg'
import Dis from '../assets/disinfectant.jpg'
import Clean from '../assets/clean.jpg'
import Footer from '../components/Footer'

const Home = ()=>{
    return <div className="home">
        <div className="banner23">
            <h1>Giving you the best home and health care products</h1>
            <div className="content23"></div>
            <div className="imagebox"></div> 
        </div>
        <div className="main-content">
            <div className="about-title">
                <h1><b>ABOUT US</b></h1>
            </div>
            <div className="new-text">
                <p className="para"> The Vision of Mass Enterprises, a newly startup proprietorship firm with MSME registered and Trade Mark owned firm to provide outstanding “Homecare Cleaning” quality products at affordable price for the people of Tamilnadu  to convert their day-to-day experience in using the consumer goods an immensely pleasurable one. 
                    At Pinnky Best™ organization, we understand the need to meet the growing requirements of consumers and retailers to provide greater transparency regarding the quality, safety and performance of the finished products.
                    We offer comprehensive solutions to help you distribute home care cleaning products that comply with local regulatory requirements as well as with your own specifications. </p>
                <p className="para">
                    In line with our "<b>Organic Sanitary Napkins</b> ", it is a chemical free, organic cotton products made with the goodness of corn, bamboo and tons of care. Choose nothing but the best for the young girls and ladies. 
                    We are always committed to providing end users, with high quality organic cotton products. Our research continues to include consumer feedback to ensure quality and innovative ideas developed from this.
                </p>
                <p className="para">
                    Pinnky Best™  Products available at a very low and affordable price. Our main aim to give best finish quality.Pinnky Best™ Specializes on <b>Gel Phenyl</b> and <b>laundry detergents</b> for all types of applications. Gel Phynyl features with Room freshener with high viscous cleaning agents. 
                    Whether you need a laundry detergent that works in cold or warm water, removes grease or oil stains, eliminates static cling, reduces formula times, or extends linen life

                </p> 
            </div>
            <div style={{color:'aliceblue'}} className="parallax">
                <p className="centered">
                    WHERE HEALTH IS PRIORITISED
                </p>
            </div>
            <div style={{textAlign:'center',position:'relative',top:'50px'}}>
                <h1 className='products'> <b>OUR PRODUCTS</b></h1>
            </div>
            <div className='info-card-container'>
                <InfoCard title={"HOME AGENTS"} description={"Upto 45% off"} imgUrl={"https://images.pexels.com/photos/4239130/pexels-photo-4239130.jpeg?auto=compress&cs=tinysrgb&w=600"}/>
                <InfoCard title={"SANITARY PAD"} description={"Upto 45% off"} imgUrl={PAD}/>
                <InfoCard title={"SOAP"} description={"Upto 45% off"} imgUrl={Soap}/>
            </div>
            <div className='map-carosaul'>
                <div id=" responsive-map"className="responsive-map">
                    <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1569.1152950731293!2d78.06807205076457!3d11.689178279612578!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babfb931eac6af3%3A0x12f4a8801e621cb7!2zTXVyYWxpIGhvdXNlIPCfj6A!5e0!3m2!1sen!2sin!4v1671381599385!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div>
                <Carousel>
                    {[Napkin,Dis,Clean].map((item, i) => (
                    <img
                        draggable="false"
                        src={item}
                        key={i}
                        className='caro-img'
                        alt=""
                    />
                    ))}
                </Carousel>
                </div>
            </div>
            <Footer />
        </div>
    </div>
}

export default Home