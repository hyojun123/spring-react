import React, {useState, useEffect} from "react";
import "./Recommend.css";


function LottoBall (props) {
    return (
        <div className="recommend-div">
            <div className={
                props.number.number1 < 10 ? "circle yellow" :
                props.number.number1 < 20 ? "circle blue" :
                props.number.number1 < 30 ? "circle red" :
                props.number.number1 < 40 ? "circle grey" :
                "circle green"
            }>{props.number.number1}</div>
            <div className={
                props.number.number2 < 10 ? "circle yellow" :
                props.number.number2 < 20 ? "circle blue" :
                props.number.number2 < 30 ? "circle red" :
                props.number.number2 < 40 ? "circle grey" :
                "circle green"
            }>{props.number.number2}</div>
            <div className={
                props.number.number3 < 10 ? "circle yellow" :
                props.number.number3 < 20 ? "circle blue" :
                props.number.number3 < 30 ? "circle red" :
                props.number.number3 < 40 ? "circle grey" :
                "circle green"
            }>{props.number.number3}</div>
            <div className={
                props.number.number4 < 10 ? "circle yellow" :
                props.number.number4 < 20 ? "circle blue" :
                props.number.number4 < 30 ? "circle red" :
                props.number.number4 < 40 ? "circle grey" :
                "circle green"
            }>{props.number.number4}</div>
            <div className={
                props.number.number5 < 10 ? "circle yellow" :
                props.number.number5 < 20 ? "circle blue" :
                props.number.number5 < 30 ? "circle red" :
                props.number.number5 < 40 ? "circle grey" :
                "circle green"
            }>{props.number.number5}</div>
            <div className={
                props.number.number6 < 10 ? "circle yellow" :
                props.number.number6 < 20 ? "circle blue" :
                props.number.number6 < 30 ? "circle red" :
                props.number.number6 < 40 ? "circle grey" :
                "circle green"
            }>{props.number.number6}</div>
        </div>
    )
}

export default LottoBall