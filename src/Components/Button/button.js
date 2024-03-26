import React from "react";
import "./button.css";

const ButtonCustom = ({ title }) => {
    return (
        <div className="button">
            <div className="button-title"> {title}</div>
        </div>
    );
};

export default ButtonCustom;