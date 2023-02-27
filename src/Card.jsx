import React from "react";

export default function Card(props) {
    const {company, logo, office, address, other, offer, text, health, care, afford, coverage } = props;
    return (
      <div className="home__card">
            <div className="home_card_div">
              <div>
                <h1>{company}</h1>
                <img  src={logo} alt="img" width="100%"/> 
                <h2 >{office}</h2>
                <p >{address}</p>
                <div className="ab"><button>{other}</button></div>
              </div>
              <div className="bb">
                  <h2 className="dd">{offer}</h2>
                  <p>{text}</p>
                  <div className="aa"><button>{health}</button></div>
              </div>
              <div className="bb">
                  <h2>{care}</h2>
                  <p>{afford}</p>
                  <div className="aa"><button>{coverage}</button></div>
              </div>
            </div>  
      </div>
    );
  }