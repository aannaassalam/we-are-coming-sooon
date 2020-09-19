import React from "react";
import "./countdown.css";

export default class Countdown extends React.Component{

constructor(props){
    super(props);
    this.state={
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    }
}

    componentDidMount(){
        var countDownDate = new Date("Oct 31, 2020 00:00:00").getTime();

        var x = setInterval(() => {

        var now = new Date().getTime();

        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        

        if (distance > 0) {
            this.setState({
                days: days,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            })
        }
        else{
            clearInterval(x);
            this.setState({
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            })
        }
    }, 1000);
    }

    render(){
        return(
            <div className="countdown">
                <div className="days">
                    <p className="top">{this.state.days}</p>
                    <p>DAYS</p>
                </div>
                <div className="hours">
                    <p className="top">{this.state.hours}</p>
                    <p>HOURS</p>
                </div>
                <div className="minutes">
                    <p className="top">{this.state.minutes}</p>
                    <p>MIN</p>
                </div>
                <div className="seconds">
                    <p className="top">{this.state.seconds}</p>
                    <p>SEC</p>
                </div>
            </div>
        )
    }
}