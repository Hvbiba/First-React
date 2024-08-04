import React from "react";
import Sliders from "./sliders";
import Text from "./text";
import Products from "./products";


function Home(){
    return(
        <>
            <div className='container' id='home-container'>
                <Text />
                <Sliders />
            </div>
            <div id='product-list'> 
                <h2>Our Products</h2>
                 <Products />
            </div>
      </>
    );
}

export default Home;