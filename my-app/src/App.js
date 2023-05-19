
import './App.css';
import FixedHeader1 from './components/fixedheader1';
import Header2 from './components/header2';
import FirstDiv from './components/firstdiv';
import Languages from './components/languages';
import { Incriment } from './components/languages';
import Nav from './components/nav';
import { Imgs } from './components/nav';
import BestUI from './components/bestUI';
import { AwesomeCodingStyle } from './components/bestUI';
import Cards from './components/4cards';
import { Imgs2 } from './components/4cards';
import Support from './components/support';
import { SupHeader } from './components/support';
import Cardss from './components/cards';
import { CardssHeader } from './components/cards';
import Responsive from './components/responsive';
import { Ecomerce } from './components/responsive';
import Reviews from './components/rewies';
import { LastPage } from './components/rewies';

function App() {
  return (
    <div className="App">
  <FixedHeader1/>
  <Header2/>
  <FirstDiv/>
  
<section className='languages'>
  <Languages title="HTML5" logo="https://html.ditsolution.net/techno-preview/assets/images/f14.png"/>
  <Languages title="CSS" logo="https://html.ditsolution.net/techno-preview/assets/images/f15.png"/>
  <Languages title="jQuery" logo="https://html.ditsolution.net/techno-preview/assets/images/f16.png"/>
  <Languages title="Fully Responsive" logo="https://html.ditsolution.net/techno-preview/assets/images/rsp.png"/>
</section>
<Incriment/>
<Nav/>

<section className='images'>
   <Imgs/>
   <Imgs/>
   <Imgs/>
   <Imgs/>
   <Imgs/>
   <Imgs/>
   <Imgs/>
   <Imgs/>
   <Imgs/>
   <Imgs/>
   <Imgs/>
   <Imgs/>
</section>

<BestUI/>
<AwesomeCodingStyle/>

<section className='cards'>
 <Cards logo="https://thumbs.dreamstime.com/b/windows-microsoft-os-icon-image-can-also-be-used-social-media-logos-suitable-mobile-apps-web-apps-print-media-82809248.jpg" text="Adjustable column"/>
 <Cards logo=" https://thumbs.dreamstime.com/b/globe-set-gray-white-vector-icons-earth-outline-continents-white-continent-gray-water-europe-africa-north-pole-vector-165040368.jpg " text="Attractive hover"/>
 <Cards logo="https://static.vecteezy.com/system/resources/previews/002/387/838/original/calendar-icon-flat-style-isolated-on-white-background-free-vector.jpg" text="Advanced single project"/>
 <Cards logo=" https://i.pinimg.com/originals/5e/8c/95/5e8c95da8c931e3212f1e2640b0ec571.jpg " text="Different Demos"/>
</section>

<Imgs2/>
<SupHeader/>

<section className='supportcards'>

 <Support image="https://i.pinimg.com/736x/bb/a8/fc/bba8fc957b3f2a7fa6d712491386a0b5.jpg " name="Sam"/>
 <Support image="https://www.lipstickalley.com/attachments/1562253/" name="Alex"/>
 <Support image=" https://assets.mycast.io/characters/clover-1034720-normal.jpg?1620433234 " name="Clover"/>
 <Support image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRJouSxcWbCxshn35fMEx9l4jwbW5I5max5c18zfgBFrAMhxH_bh15gA6r4dT8HxMkd-k&usqp=CAU " name="Mandy"/>
</section>

<CardssHeader/>

<section className='cardssCont'>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f14.png " title=" HTML5 "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f15.png " title=" CSS3 "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f16.png " title=" jQuery "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f17.png  " title=" W3C Validation "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f5.png " title=" Translation Ready "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f9.png " title=" Revolution Slider "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f10.png  " title=" Contact Form 7 "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f11.png " title=" Quick View "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f13.png " title=" TI Wishlist "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f18.png " title=" Fully Responsive "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f19.png " title=" Google Fonts "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f22.png " title=" Well Documented "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f23.png " title=" Incredible Support "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f25.png " title=" SEO Friendly "/>
<Cardss logo=" https://html.ditsolution.net/techno-preview/assets/images/f27.png " title=" Cross Browser "/>
</section>

<Responsive/>
<Ecomerce/>

<section className='reviewCont'>
    <Reviews logo=" https://i.pinimg.com/736x/7e/01/93/7e019368cef66c9ea72d9b59016f33ee.jpg " name="Bubbles "/>
    <Reviews logo=" https://cdn.dribbble.com/users/8332418/screenshots/16031680/400x400-blossom-from-powerpuff-girls.jpg " name="Blossom"/>
    <Reviews logo=" https://i.pinimg.com/564x/64/94/b8/6494b819da61c6827d9ff8131b87ea15.jpg " name="Buttercup"/>
</section>

<LastPage/>
  
 </div>
  );
}

export default App;
