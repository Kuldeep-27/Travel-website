import star1 from "../../assets/Star.png";
import star2 from "../../assets/Star2.png";
import "./ReviewCard.scss"

const ReviewCard = () => {
    return (
        <div className="review-card">

          
            <button>MAIN ACTIVITY</button>
            <span>|</span>
            <div className="stars">
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star1} alt="" />
            <img src={star2} alt="" />

            </div>
           

            <p>584 reviews</p>
            
          

          


        </div>
    )
}

export default ReviewCard;