import "./Included.scss"

const Included = () => {
    return (
        <div className="include-container">
            <h2>What Is Included/Not Included</h2>
             <div className="items">
                <div className="include">
                    <h3>Includes</h3>
                    <ul>
                        <li>Double-decker Routemaster tour</li>
                        <li>Short trip along the River Thames</li>
                        <li>Changing of the Guard</li>
                        <li>Gratuities</li>
                    </ul>

                </div>
                <div className="not-include">
                   <h3>Not Includes</h3>
                   <ul>
                    <li>Double-decker Routemaster tour</li>
                    <li>Short trip along the River Thames</li>
                    <li>Changing of the Guard</li>
                    <li>Gratuities</li>
                   </ul>
                </div>
             </div>

        </div>
    )
}

export default Included