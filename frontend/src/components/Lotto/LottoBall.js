import React, {useState, useEffect} from "react";
import "./Recommend.css";


function LottoBall (props) {
    return (
        <div className="recommend-div">
            <div className={
                props.number.drwtNo1 < 10 ? "circle yellow" :
                props.number.drwtNo1 < 20 ? "circle blue" :
                props.number.drwtNo1 < 30 ? "circle red" :
                props.number.drwtNo1 < 40 ? "circle grey" :
                "circle green"
            }>{props.number.drwtNo1}</div>
            <div className={
                props.number.drwtNo2 < 10 ? "circle yellow" :
                props.number.drwtNo2 < 20 ? "circle blue" :
                props.number.drwtNo2 < 30 ? "circle red" :
                props.number.drwtNo2 < 40 ? "circle grey" :
                "circle green"
            }>{props.number.drwtNo2}</div>
            <div className={
                props.number.drwtNo3 < 10 ? "circle yellow" :
                props.number.drwtNo3 < 20 ? "circle blue" :
                props.number.drwtNo3 < 30 ? "circle red" :
                props.number.drwtNo3 < 40 ? "circle grey" :
                "circle green"
            }>{props.number.drwtNo3}</div>
            <div className={
                props.number.drwtNo4 < 10 ? "circle yellow" :
                props.number.drwtNo4 < 20 ? "circle blue" :
                props.number.drwtNo4 < 30 ? "circle red" :
                props.number.drwtNo4 < 40 ? "circle grey" :
                "circle green"
            }>{props.number.drwtNo4}</div>
            <div className={
                props.number.drwtNo5 < 10 ? "circle yellow" :
                props.number.drwtNo5 < 20 ? "circle blue" :
                props.number.drwtNo5 < 30 ? "circle red" :
                props.number.drwtNo5 < 40 ? "circle grey" :
                "circle green"
            }>{props.number.drwtNo5}</div>
            <div className={
                props.number.drwtNo6 < 10 ? "circle yellow" :
                props.number.drwtNo6 < 20 ? "circle blue" :
                props.number.drwtNo6 < 30 ? "circle red" :
                props.number.drwtNo6 < 40 ? "circle grey" :
                "circle green"
            }>{props.number.drwtNo6}</div>
        </div>
    )
}

export default LottoBall