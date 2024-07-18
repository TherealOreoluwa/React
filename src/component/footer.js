import React from "react"

function Footer(){
    return(
        <div className="Footer">
            <div className="abt">
                <div className="abouthd">About Us</div>
                <div className="abouttxt">The dining facility at Greenbelt Hotel offers a delightful culinary <br></br> experience that caters to every <br></br> palate. </div>
            </div>
            <div className="link">
                <div className="Quick">Quick Links</div>
                {/* <div className="Links">
                    <a href="">About</a>
                    <a href="">Rooms</a>
                    <a href="">Book A Room</a>
                    <a href="">Contact</a>
                </div> */}
            </div>
        </div>
    )
}

export default Footer