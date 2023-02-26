import React from "react";
import Hero3 from "../Hero3";
import base from "../images/cuate.png"
import ami from "../images/amico10.png"
import par from "../images/pana.png"
import pat from "../images/pana1.png"

export default function About() {
    return(
        <div className="about__cont">
            <div className="about-alt-cont">
                <div className="htc">
                    <div className="about-alt-img">
                        <div className="alt"><img src={base} alt="contact us" width='85%'/></div>
                    </div>
                    <div className="alt-text">
                        <h1>Who we are?</h1>
                        <p>At InsureHealth we are focused on ensuring that our clients get to know about the best health insurance providers and we get to connect them to these  health insurance providers.</p><br />
                        <p>You get to choose which the provider you would like to use based on your income or budget.</p><br />
                        <p>We act as  the mediator between the client and health providers to guarantee a smooth access to healthcare.</p><br />
                        <p>We are partnered with 90% HMO providers and hospital
                        across Nigeria to provide individuals with reliable and
                        usable healthcare that caters to their needs at any time </p>
                    </div>
                </div>
            </div>

            <div className="mission-cont">
                <div className="mission">
                    <h1>Our Mission</h1>
                    <p>We aim to provide everyone with a chance to access affordable <br /> Healthcare services irrespective of their budget or income. <br /> We are constantly educating people on the best way to <br /> leverage insurance and use it wisely.</p>
                </div>
            </div>

            <div className="value_cont">

                <h1 style={{textAlign:"center"}}>Our Core Values</h1>

                <div className="value__flex">
                    <div className="value__div">
                        <img src={ami} alt="image" width="50%" />
                        <h1>Accessibility</h1>
                        <p>At InsureHealth , we are bent on providing solutions to accessible healthcare for our clients by ensuring there is a plan for everyone irrespective of income or budget.</p>
                    </div>
                    <div className="value__div">
                        <img src={par} alt="image" width="50%" />
                        <h1>Reliability</h1>
                        <p>We work with the best HMO’s providers in Nigeria and we take pride in providing the best services to our clients. We do not take chances with the health of any of our clients.</p>
                    </div>
                    <div className="value__div">
                        <img src={pat} alt="image" width="50%" />
                        <h1>Safety</h1>
                        <p>We prioritize the safe keeping of our clients medical records and history. We ensure that this records are made available only to the client whenever the need arises.</p>
                    </div>
                </div>
            </div>

            <div className="pain">
                <h3>"A tremendous amount of needless pain and suffering can be eliminated by ensuring that health insurance is universally available."</h3>
            </div>

            <div><Hero3 /></div>


        </div>
    )
}


