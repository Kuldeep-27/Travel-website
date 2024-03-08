import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import Button from "../Button/Button";
import "./Detail.scss"

const Detail = ({val}) => {
  return (
    
    <div className="detail-container">

      
      <div className="left">
        <div className="part1">
          <img src={logo1} alt="" />
          <div className="detail">
            <h3>Free Cancellation</h3>
            <p>
              Cancel upto 24 hours in advance to <br /> receive a full refund
            </p>
          </div>
        </div>
        <div className="part2">
          <img src={logo2} alt="" />
          <div className="detail">
            <h3>Mobile Ticketing</h3>
            <p>Use your phone or print your voucher</p>
          </div>
         
        </div>
        <div className="part3">
            <img src={logo3} alt="" />
            <div className="detail">
              <h3>Instanct Confirmation</h3>
              <p>Dont't wait for the confirmation!</p>
            </div>
          </div>
      </div>
      <div className="right">
        <div className="part4">
        <img src={logo4} alt="" />
            <div className="detail">
              <h3>Health Precautions</h3>
              <p>Special health and safety measures<br/>apply.Learn more</p>
            </div>
            
        </div>
        <div className="part5">
        <img src={logo5} alt="" />
            <div className="detail">
              <h3>Duration 3.5 Hours</h3>
              <p>Check availability to see starting times</p>
            </div>
        </div>
        <div className="part6">
            {
                val ? <Button/> :
                <>
                <img src={logo6} alt="" />
                <div className="detail">
                  <h3>Live Tour Guide In English</h3>
                  <p>English</p>
                </div>
                </>
            }
       
        </div>

      </div>
    </div>
  );
};

export default Detail
