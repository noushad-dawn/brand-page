import React from "react";


const Main=()=>{
    return(
        <main>
          <div className="content">
            <h1>YOUR FEET
              DESERVE
              THE BEST</h1>
            <br />
            <p className="details">YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
            <div className="buttons">
              <button className="shop-now">Shop Now</button>
              <button className="category">Category</button>
            </div>
            <p>
              Also Available On
            </p>
            <div className="store-img">
              <img src="./flipkart.png" alt="flipkart"></img>
              <img src="./amazon.png" alt="amazon"></img>
            </div>
          </div>

          <div className="product-img">
            <img src="./shoe_image.png" alt="shoe"></img>
          </div>
        </main>
    );
}

export default Main;