import React from "react";
import classes from "./Card.module.css";
const Card = (props) => {
    const finalCalss = classes.card +' ' +props.className;
    return(
        <div className={finalCalss}>{props.children}</div>
    );
};

export default Card;