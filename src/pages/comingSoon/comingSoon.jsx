import React from "react";
import "./comingSoon.css";

import CountDown from "../../components/countdown/countdown";

export default class ComingSoon extends React.Component{
    render(){
        return(
            <div className="container">
                <div className="heading">
                    <h2>WE ARE <strong>ALMOST</strong> THERE</h2>
                    <p>Stay tuned for something amazing!!!</p>
                </div>
                <div className="countdown-cont">
                    <CountDown/>
                </div>
            </div>
        )
    }
}