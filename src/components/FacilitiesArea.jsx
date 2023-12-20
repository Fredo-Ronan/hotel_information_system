import "./style/FacilitiesStyle.css";

export const FacilitiesArea = ({ facilities }) => {


    return (
        <>
            <div className="d-flex justify-content-center flex-wrap" style={{marginTop: "9rem", gap: "5rem"}}>
                <div className="headline-facilities">
                    <h2>We do our best facilities provide you</h2>
                    <p>Discover Your Ideal Haven: Find Your Perfect Stay at The 5 Stars Hotel</p>
                    <button type="button" className="btn btn-success">Book Now</button>
                </div>

                <div className="grid-facilities">
                    {facilities.map((facility, index) => (
                        <div className="facility-item" key={index}>
                            <img src={facility.icon} alt="icon" />
                            <p className="mt-3">{facility.facilityName}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}