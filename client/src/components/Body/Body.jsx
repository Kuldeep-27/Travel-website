import "./Body.scss"
import vector from "../../assets/Vector.png";
import star from "../../assets/Star.png";
import ImageCard from "../ImageCard/ImageCard";
import Detail from "../Detail/Detail";
import Booking from "../Booking/Booking";
import Description from "../Description/Description";
import Activity from "../Activity/Activity";
import Included from "../Included/Included";
import Safety from "../Safety/Safety";
import Info from "../Info/Info";
import Work from "../Work/Work";

const Body = () => {
    return (
        <div className="body-container">
          <div className="container">
             <div className="heading">
             Vintage Double Decker Bus Tour & Thames River Cruise
             </div>
             <div className="reviews">
               
                 <div className="part1">
                   <img src={vector} alt="" />
                   <span>Gothenburg</span>
                   <p>|</p>
                  
                 </div>
                 <div className="part2">
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                    <img src={star} alt="" />
                 
                 </div>
                 <div className="part3">
                    
                    <p>348 reviews</p>

                 </div>
             </div>
             <div className="card-section">
                <div className="item1">
                  <ImageCard/>
                  <Detail/>

                </div>
                <div className="item2">
                  <Booking/>
                </div>

             </div>
             <div className="description">
                <Description/>
                <Activity/>
                <Included/>
                <Safety/>
                <Info/>
                
             </div>
             <div className="activities-in-dubai">
                <Work/>
             </div>
          </div>
          
        </div>
    )
}

export default Body;