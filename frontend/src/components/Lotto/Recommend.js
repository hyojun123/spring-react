import React, {useState, useEffect} from "react";
import "./Recommend.css";


function Recommend () {
    return (
        <>
            <div className="recommend-div">
                <div className="circle yellow">1</div>
                <div className="circle blue">10</div>
                <div className="circle red">20</div>
                <div className="circle grey">30</div>
                <div className="circle green">40</div>
            </div>
        </>
    )
}

export default Recommend