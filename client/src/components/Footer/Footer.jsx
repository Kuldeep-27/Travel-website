import "./Footer.scss"
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.png";
import card3 from "../../assets/card3.png";
import card4 from "../../assets/card4.png";
import card5 from "../../assets/card5.png";
import card6 from "../../assets/card6.png";
import card7 from "../../assets/card7.png";
import card8 from "../../assets/card8.png";
import card9 from "../../assets/card9.png";
import card10 from "../../assets/card10.png";
import links from "../../assets/links.png";


const Footer = () => {
    return (
        <div className="footer-section">
            <div className="wrapper">
            <div className="left">
                <select name="" id="">
                    <option value="">English(UK)</option>
                    <option value="">India</option>
                    <option value="">USA</option>
                </select>

                <select name="" id="">
                    <option value="">US Dollar($)</option>
                    <option value="">Rupee</option>
                    <option value="">USA</option>
                </select>



            </div>
            <div className="right">
                <div className="images">
                    <div className="part1">
                    <img src={card1} alt="" />
                    <img src={card2} alt="" />
                    <img src={card3} alt="" />
                    <img src={card4} alt="" />
                    <img src={card5} alt="" />
                    </div>
                    <div className="part2">
                    <img src={card6} alt="" />
                    <img src={card7} alt="" />
                    <img src={card8} alt="" />
                    <img src={card9} alt="" />
                    <img src={card10} alt="" />
                    </div>
                   
                </div>

              

            </div>

            </div>

            <div className="links">
                <img src={links} alt="" />
            </div>
          

        </div>
    )
}

export default Footer;