import pic from "../../assets/share.png"
import "./Booking.scss"

const Booking = () => {
    return (
        <div className="booking-container">
            <h3>Booking</h3>
            <form action="">
                
                <label htmlFor="from">From</label>
                <input type="date" id="from" placeholder="10/12/2021" />

                <label htmlFor="type">Type</label>
                <input type="text" id="type" placeholder="S Class Best Ticket" />

                <label htmlFor="guest">No. Of Guests</label>
                <select name="" id="guest">
                    <option value="">2 adults</option>
                    <option value="">3 adults</option>
                    <option value="">4 adults</option>
                </select>
                <div className="total">
                <p>Subtotal</p>
                <h3>$78.90</h3>
                </div>
               

                <button>Confirm Booking</button>
              
            </form>
            <button>
                <img src={pic} alt="" />
                <span>Share The Activity</span>
            </button>

        </div>
    )
}

export default Booking;