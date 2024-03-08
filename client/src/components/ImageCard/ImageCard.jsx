import pic from "../../assets/Rectangle129.png"
import pic1 from "../../assets/Rectangle158.png"
import pic2 from "../../assets/Rectangle159.png"
import pic3 from "../../assets/Rectangle160.png"
import pic4 from "../../assets/Rectangle161.png"
import pic5 from "../../assets/Rectangle162.png"
import pic6 from "../../assets/Rectangle163.png"
import "./ImageCard.scss"

const ImageCard = ({src}) => {
    return (
        <div className="image-card">
            <img src={src ? src : pic} alt="" />
            <div className="small-images">
               <img src={pic1} alt="" />
               <img src={pic2} alt="" />
               
               <img src={pic3} alt="" />
               
               <img src={pic4} alt="" />
               <img src={pic5} alt="" />
               <img src={pic6} alt="" />
            </div>
        </div>
        
    )
}

export default ImageCard;