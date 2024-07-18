import React from "react";

function Subscribe(){
    return(
        <div className="parent">
            <div className="subshead">Join our newsletter</div>
            <div className="subsdesc">Sign up to our newsletter to receive our latest newss about offers & promotions</div>
            <form>
                <div className="frmhd">Email Address</div>
                <input type="text" placeholder="Enter your email"></input>
                <br></br>
                <button className="newsl">Subscribe</button>
            </form>
        </div>
    )
}

export default Subscribe