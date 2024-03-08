import "./Button.scss"
const Button = () => {
    return (
        <div className="button-container">
            <button>Book Now</button>
            <div>
                <span>$35.00</span>
                <p>per person</p>
            </div>
        </div>
    )
}

export default Button;