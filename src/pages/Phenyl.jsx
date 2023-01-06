import '../styles/PhenylPage.css'
import Card from '../components/Card'
import BackGround from '../assets/1.jpg'
import Logo from '../assets/LOGO.png'
import Floor from '../assets/floor2.jpg'
import P1 from '../assets/cleaning/phenyl1.png'
import P2 from '../assets/cleaning/phenyl2.png'
import P3 from '../assets/cleaning/phenyl3.png'
import P4 from '../assets/cleaning/phenyl4.png'
import P5 from '../assets/cleaning/phenyl5.png'
import MC1 from '../assets/cleaning/MC1.png'
import MC2 from '../assets/cleaning/MC2.png'
import MC3 from '../assets/cleaning/MC3.png'
import B1 from '../assets/cleaning/B1.png'
import B2 from '../assets/cleaning/B2.png'
import Footer from '../components/Footer'
import Details from '../components/Details'

const PhenylPage = ({bcolor})=>{
    return <><div className="phenyl" style={{backgroundColor:'#89CFF0'}} >
        <div className="landing-cover">
            <img src={BackGround} className="background" alt=""/>
            <h1>Pinky Best Mass Enterprises </h1>
            <img className='logo' src={Logo} alt=""/>
            <h1>The Best <span style={{color:'#4169E1'}}>Home</span>  protection</h1>
        </div>
        
        <h1 className='pt1'>Phenyl</h1>
        
        <Details img={Floor}>
        <p><b>Contents:</b><br />
	        Pine oil, Soft soap, Solubilizer, DM water, Formulated with fragrance boosting aroma oils.
        </p> 
		<p><b>Dilution & How to Use:</b>250ml liquid : 750ml Water (1:3)</p>
        <p><b>Places Used:</b>Sanitation purpose and removing bad odors. |Used in Hospitals, Nursing homes, Drains and Schools, Colleges, Public toilets.</p>
	    <p><b>Features:</b>Keep the surfaces fresh with long-lasting fragrances. Acts as Anti-germs and air fresheners. Cleaning all kinds of surfaces. Safe for kids and pets.</p>
        </Details>

        <div className='card-container'>
            <Card title="GEL PHENYL 3X 500ML LAVENDER" qty="1" price={90} fake={150} description="Busting+Tydying Specially formulates for industrial/institutional use" image={P1}/>
            <Card title="GEL PHENYL 3X 500ML JAVADHU" qty="1" price={90} fake={150} description="Busting+Tydying Specially formulates for industrial/institutional use" image={P2}/>
            <Card title="GEL PHENYL 3X 1L JAVADHU" qty="1" price={190} fake={205} description="Busting+Tydying Specially formulates for industrial/institutional use" image={P3}/>
            <Card title="GEL PHENYL 3X 500ML BLOSSOM" qty="1" price={190} fake={200} description="Busting+Tydying Specially formulates for industrial/institutional use" image={P4}/>
            <Card title="GEL PHENYL 3X 5Litre JAVADHU" qty="1" price={950} fake={1025} description="Busting+Tydying Specially formulates for industrial/institutional use" image={P5}/>
        </div>
        <h1 className='pt1'>Multipurpose cleaner</h1>
        <Details img={Floor}>
        <p><b>Contents:</b><br />
            Natural Fragrances with DM water, Benzalkonium Chloride, Sodium lauryl sulphate, Citric acid & sodium sulphate
        </p> 
		<p><b>Dilution & How to Use:</b>1:10 (1 part liquid + 10 parts Water for catagory-1) & 1:20 (1 part liquid + 20 parts Water for category-2</p>
        <p><b>Places Used:</b>School, College, hostel, hospial, Resorts, Lodges, Meeting hall & Marriage hall, Hotels, Bakery, Canteens, Car, Bike, three wheeler water serive station.</p>
	    <p><b>Features:</b>Keep the surfaces fresh with long-lasting fragrances. Acts as Anti-germs and air fresheners. Cleaning all kinds of surfaces. Safe for kids and pets.</p>
        </Details>
        
        <div className='card-container'>
            <Card title="Multipurpose Cleaner 500ML CITRUS LEMON" qty="1" price={99} fake={105} description="Disinfectant + Cleans|Fight Odors|Shines" image={MC1}/>
            <Card title="Multipurpose Cleaner 500ML LAVENDER" qty="1" price={99} fake={105} description="Busting+Tydying Specially formulates for industrial/institutional use" image={MC2}/>
            <Card title="Multipurpose Cleaner 1L CITRUS LEMON" qty="1" price={198} fake={218} description="Disinfectant + Cleans|Fight Odors|Shines" image={MC3}/>
        </div>
        <h1 className='pt1'>Bathroom & Laundry Cleaners</h1>
        <div className='card-container'>
            <Card title="BATHROOM TILES CLEANER 500ML" qty="1" price={150} fake={135} description="Busting+Tydying" image={B1}/>
            <Card title="LAUNDRY WASH 1L" qty="1" price={200} fake={220} description="Specially formulates for industrial/institutional use" image={B2}/>
        </div>
    </div>
    <Footer />
    </>
}

export default PhenylPage