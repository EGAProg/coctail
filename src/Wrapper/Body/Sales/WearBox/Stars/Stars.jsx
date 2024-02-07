import React from "react";

const Stars = (props) => {
    return (
        <div className="stars">
            <img src={props.stars} alt="*"></img>
        </div>
    )
};

export default Stars;