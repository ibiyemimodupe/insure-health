// import "./Navbar.css"
import Profile from "../profile/Profile"
import logo from "./images/Group 23.png"
import {Link} from 'react-router-dom'
import frame from './images/Frame 4.png'
import bro from './images/bro.png'
import SearchBar from './SearchBar';
import ParentComponent from "../filter/ParentComponent"
import HmoData from "./data/HmoData"
import Card from "../Card"

function backToHome(event) {
    event.preventDefault();
    // handle login logic here
    window.location.href = "/";
  }

export default function Home() {
    const handleSearch = (searchTerm) => {
        console.log(`Searching for ${searchTerm}...`);
        // Do something with the search term
    }

    const card = HmoData.map(item => {
        return (
            <Card 
               company={item.company}
               logo={item.logo}
               office={item.office}
               address={item.address}
               other={item.other}
               offer={item.offer}
               text={item.text}
               health={item.health}
               care={item.care}
               afford={item.afford}
               coverage={item.coverage}
            />
        )
    }) 
    
    return(
        <div>
            <div className="home-cont">
                <div className="nav1">
                    <div className="logo1">
                        <img onClick={backToHome} src={logo} alt="logo" width='100%' />
                    </div>
                    <div className="options1">
                        <ul className="opt1">
                            <span><li style={{fontWeight:"bold"}}>Home</li></span>
                            <Link to="/about" style={{textDecoration:'none'}}>
                                <li style={{color:"black"}}>About Us</li>
                            </Link>
                            <Link to="/contact" style={{textDecoration:'none'}}>
                                <li style={{color:"black"}}>Contact Us</li>
                            </Link>
                            <li><Profile /></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div >
            <SearchBar onSearch={handleSearch} />
            {/* Other content */}
            </div>

            <div className="insure-cont">
                <h1>Pick from our <br /> arrays of <br /> Reliable Health <br /> Insurance <br /> Providers, the <br /> one that best <br /> suits your needs</h1>
                <img src={frame} alt="insure" width='100%' />
            </div>

            <div className="health-cont">
                <div className="col-btn"><button className="health-cont-btn" >Default view</button></div>
                <div className="health__div">
                    <img src={bro} alt="" width='100%'/>
                    <div className="health__text">
                        <p>Get updates and info on heath care news, articles written by heath professionals and you get to make suggestions and get your inquires answered by the community</p>
                        <button className="talk-btn">Health Talks</button>
                    </div>
                </div>
            </div>

            <div  className="hmo__contain">
                <div>
                    <ParentComponent />
                </div>
                <div className="hmo__company">{card}</div>
            </div>
        </div>
    )
}