import React from "react";

function About(){
    return(
        <>
            <div className="container" id="about">
                <img src="https://i.pinimg.com/736x/8b/78/bc/8b78bcd3aa5791474dce9857bd214853.jpg"/>
                <div className="about">
                    <h3>About Us Section.</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                     reprehenderit in voluptate velit esse cillum dolore eu fugiat 
                     nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <button id="bout-btn" type="button" class="btn btn-primary">Read More About Us</button>
                </div>
            </div>
        </>
    );
}

export default About;