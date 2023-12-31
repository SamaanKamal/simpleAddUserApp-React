import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {  
    return(
    <div>
        <div className={classes.backdrop} onClick={props.onDisableError}></div>
        <Card className ={classes.modal}>
            <header className={classes.header}>
                <h2>{props.header}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.body}</p>
            </div>
            <footer className={classes.actions}>
                <Button onClick ={props.onDisableError}>Okay</Button>
            </footer>
        </Card>
    </div>
    );
};

export default ErrorModal;