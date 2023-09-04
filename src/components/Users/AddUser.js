import React ,{ useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const SavingData = (event) =>
    {
        event.preventDefault();
        if(enteredUsername.trim().length===0 || enteredAge.trim().length===0)
        {
            setError({
                title:"Empty data entered",
                body:"Please try again with valid data"
            })
            return;
        }
        if(+enteredAge < 1)
        {
            setError({
                title:"invalid age entered",
                body:"Please try again with valid age > 1"
            })
            return;
        }
        props.onAddUser(enteredUsername,enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHnadler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const ageChangeHnadler = (event) => {
        setEnteredAge(event.target.value);
    };

    const ErrorHandler = () =>{
        setError(null);
    };

    return(
        <div>
          {error &&<ErrorModal header={error.title} body={error.body} onDisableError ={ErrorHandler}/>}
          <Card className ={classes.input}>
            <form onSubmit={SavingData}>
                <label htmlFor="username">UserName</label>
                <input id ="username"type ="text" value={enteredUsername} onChange={usernameChangeHnadler}></input>
                <label htmlFor="age">Age</label>
                <input  id = "age" type = "number" value={enteredAge} onChange={ageChangeHnadler}></input>
                {/* </><button type="submit">Add User</button> */}
                <Button type="submit">Add User</Button>
            </form>
          </Card>
        </div>
    );
};

export default AddUser;