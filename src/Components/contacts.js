import React from "react";

function Contact(){
    return(
        <>
            <div className="container" id="contact">
                <h3>Contact Us.</h3>
                <form>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                    <input type="password" class="form-control" placeholder="Password" aria-label="Password" aria-describedby="basic-addon1"/>
                    <input type="text" id="message"class="form-control" placeholder="Message" aria-label="Username" aria-describedby="basic-addon1"/>
                    <button id="send-btn" type="button" class="btn btn-primary">Send</button>
                </form>
            </div>
        </>
    );
}

export default Contact;