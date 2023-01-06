import '../styles/Napkin.css'
import BackGround from '../assets/nap2.jpg'
import Logo from '../assets/LOGO.png'
import Details from '../components/Details'
import Placeholder from '../assets/2.jpg'
import Card from '../components/Card'
import PAD1 from '../assets/pad1.png'
import Footer from '../components/Footer'

const NapkinPage = ()=>{
    return <><div className="napkinPage">
        <div className="landing-cover">
            <img src={BackGround} className="background" alt=""/>
            <h1>Pinky Best Mass Enterprises </h1>
            <img className='logo' src={Logo} alt=""/>
            <h1>The Best <span style={{color:'rgb(241, 13, 154)'}}>Period</span>  protection</h1>
        </div>
        <div className='intro'>
            <p>Pinnky Best encourages women embrace their bodies and celebrate life. Fruit Gum layer are far better than the chemical gel based and non-biodegradable napkins. Our napkins do come with Anion strips. Keep choosing the fruit gum layered and bamboo napkins for irritation free and hygenic menstruation.</p>
            <p>Pinnky Best pads are designed to meet your specific needs and are available across various sizes and different forms. Explore our wide rannge of Sanitary pads and select the one that fits your needs</p>
        </div>

        <h1 className='so'>Thick Dry Net Pad</h1>
        <Details img={Placeholder}>
        <p>Pinnky Best gives you No.1 Hygenic Protection</p> 
         <ul>
             <li>It is made of wood pulp. </li>
             <li>It has germ-lock technology which locks uoto 100% wetness, odour & germs.</li>
             <li>Dry net cover helps in long lasting best dry feel. It's Extra absorbent channel, controls heavy flows pad wetness for long lasting best dry feel</li>
         </ul>    
        </Details>
        <div className='card-container'>
            <Card title="THICK XL DRY NET PADS" qty="32" price={230} fake={400} description="Buy 3 Get 1 Free" image={PAD1}/>
            <Card title="THICK XXL DRY NET PADS" qty="7" price={105} fake={50} description="Buy 3 Get 1 Free" image={PAD1}/>
            <Card title="THICK XXL DRY NET PADS" qty="7" price={55} fake={45} description="Buy 3 Get 1 Free" image={PAD1}/>
        </div>
        <h1 className='so'>Ultra Thin Dry Net Pad</h1>
        <Details img={Placeholder}>
        <p>Pinnky Best gives you No.1 Hygenic Protection</p> 
         <ul>
             <li>It is made of wood pulp. </li>
             <li>It has germ-lock technology which locks uoto 100% wetness, odour & germs.</li>
             <li>Dry net cover helps in long lasting best dry feel. It's Extra absorbent channel, controls heavy flows pad wetness for long lasting best dry feel</li>
         </ul>   
        </Details>
        <div className='card-container'>
            <Card title="ULTRA THIN DRY NET PAD-XL" qty="7" price={75} fake={60} description="Buy 3 Get 1 Free" image={PAD1}/>
            <Card title="ULTRA THIN DRY NET PAD-XL" qty="20" price={165} fake={140} description="Buy 3 Get 1 Free" image={PAD1}/>
            <Card title="ULTRA THIN DRY NET PAD-XL" qty="20" price={165} fake={140} description="Buy 3 Get 1 Free" image={PAD1}/>
        </div>
        <h1 className="topic so">Anion Panty Liner </h1>
        <Details img={Placeholder}>
        <p>Pinnky Best provides sanitary pads that are equipped with Anion Panty Liners which prove to be the best in the following ways: </p>
                <ul>
                    <li>Relief from allergies and migraints headaches</li>
                    <li>Improves sleep and relaxation.</li>
                    <li>Reduction in the severity of Asthma Attacks.</li>
                    <li>Strengthens Immune System.</li>
                    <li>Natural detoxification of the body</li>
                </ul>    
        </Details>
        <div className='card-container'>
            <Card title="ANION PANTY LINER 180MM " qty="20" price={130} fake={150} description="Buy 3 Get 1 Free" image={PAD1}/>
            <Card title="ANION PANTY LINER 155MM" qty="32" price={99} fake={115} description="Buy 3 Get 1 Free" image={PAD1}/>
            <Card title="ANION PANTY LINER 180MM" qty="32" price={133} fake={155} description="Buy 3 Get 1 Free" image={PAD1}/>
        </div>
        <h1 className='so'>Bamboo Cotton Sheet </h1>
        <Details img={Placeholder}>
            <p>Pinnky Best Ultra Thin Dry Net Pads gives you No.1 Softness and Airy Frshness during your periods.</p>
            <ul>
                <li>Its longer length and wider back ensures that you are protected from leaks all sides.</li>
                <li>This Pad is made of cotton sheet which are gentle on your skin as they are very soft, prevent rashes and irritation.</li>
                <li>The air laid paper proves to provide extra softness & freshness throughout the night which induces better sleep.</li>
            </ul>    
        </Details>
        <div className='card-container'>
            <Card title="BAMBOO COTTON SHEET-XL" qty="7" price={120} fake={145} description="Buy 3 Get 1 Free" image={PAD1}/>
            <Card title="BAMBOO COTTON SHEET-XXL" qty="20" price={250} fake={280} description="Buy 3 Get 1 Free" image={PAD1}/>
            <Card title="BAMBOO COTTON SHEET-XXL+" qty="7" price={140} fake={165} description="Buy 3 Get 1 Free" image={PAD1}/>
        </div>
        <h1 className='so'>Ultra Thin Cotton Sheet </h1>
        <Details img={Placeholder}>
            <p>Pinnky Best Ultra Thin Dry Net Pads gives you No.1 day & night protection.</p>
            <ul>
                <li>Its longer length and wider back ensures that you are protected from leaks from all sides.</li>
                <li> This Ultra Thin Dry Net Pad is made of cotton sheet which are gentle on your skin as they are very soft, prevent rashes and irritation. They provide you with excellent absorbency, are also breathable since there is no plastic.</li>
                <li>It is dermatologically tested as it prevents the growth of bacteria.</li>
            </ul>    
        </Details>
        <div className='card-container'>
            <Card title="ULTRA THIN COTTON TOP SHEET-XL" qty="7" price={70} fake={95} description="Buy 3 Get 1 Free" image={PAD1}/>
            <Card title="ULTRA THIN COTTON TOP SHEET-XXL" qty="7" price={50} fake={100} description="Buy 3 Get 1 Free" image={PAD1}/>
        </div>
    </div>
    <Footer />
    </>
}

export default NapkinPage