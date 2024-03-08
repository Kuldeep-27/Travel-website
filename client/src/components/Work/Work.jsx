import left from "../../assets/left.png";
import right from "../../assets/right.png";
import ImageCard from "../ImageCard/ImageCard";
import "./Work.scss"
import camel from "../../assets/camel.png"
import ReviewCard from "../ReviewCard/ReviewCard";
import Detail from "../Detail/Detail";


const Work = () => {
    return (
        <div className="work-container">
            <h2>Activities To Do In Dubai</h2>
            <div className="button">
                <button>Main Activities</button>
                <div>
                <button><img src={left} alt="" /></button>
                <button id="right"><img src={right} alt="" /></button>
                </div>
               

            </div>

            <div className="items">
                <div  className="left">
                   <ImageCard/>
                   <div style={{backgroundColor:"lightgrey"}}>
                   <ReviewCard/>
                    <h2 style={{margin:"3vh 3vw"}}>Burj Khalifa</h2>
                   <Detail val="true"/>
                   </div>
                </div>
                <div className="right">
                   <ImageCard src={camel}/>
                   <div style={{backgroundColor:"lightgrey"}}>
                   <ReviewCard/>
                   <h2 style={{margin:"3vh 3vw"}}>Desert Safari</h2>
                   <Detail val="true"/>
                   </div>
                </div>
            </div>

        </div>
    )
}

export default Work;