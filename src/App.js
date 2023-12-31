import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList,setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) =>{
    setUsersList((prevUsers =>{
      return [...prevUsers, {key:Math.random().toString(),username:uName, age:uAge}]
    }))
  };
  return (
    <div>
      <AddUser onAddUser = {addUserHandler}/>
      <UsersList users ={usersList}/>
    </div>
  );
}

export default App;
