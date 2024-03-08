import "./Info.scss";

const Info = () => {
    return (
        <div className="info-container">
            <h2>Details</h2>
            <div className="items">
                <div className="language">
                    <h3>Language</h3>
                    <ul>
                        <li>English</li>
                        <li>French</li>
                    </ul>
                </div>
                <div className="duration">
                   <h3>Duration</h3>
                   <ul>
                    <li>2 hours</li>
                   </ul>
                </div>
                <div className="people">
                   <h3>Number Of People</h3>
                   <ul>
                    <li>5 People</li>
                   </ul>
                </div>
            </div>

            <h3>Meeting Point Address</h3>
            <ul>
                <li>Meet your guide inside the west entrance of Altab Ali Park (Whitechapel Road). It's opposite the entrance to Aldgate East Tube Station and the Whitechapel Gallery. Look for a guide wearing SMT attire and holding a red SMT flag</li>
            </ul>

            <a href="">Open In Google Maps</a>

        </div>
    )
}

export default Info;