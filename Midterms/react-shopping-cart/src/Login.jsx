import React, { useState } from 'react';
import Shop from './Shop';
import AdminPanel from './AdminPanel';

export default function Login(){

    let items = [
        {id: 1, name: "grapes", price: 50},
        {id: 2, name: "orange", price: 20},
        {id: 3, name: "pickles", price: 40}
    ]

    let accounts = [
        {id: 1, username: "customer", password:"customer", role: "customer"},
        {id: 2, username: "admin", password:"admin", role: "admin"}
    ]
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [role, setRole] = useState("");
    const [enteredUsernames, setEnteredUsernames] = useState("");
    const [enteredPassword, setEnteredPasswords] = useState("");
    
    function getUserName(event){
        setEnteredUsernames(event.target.value)
    }
    function getPassword(event){
        setEnteredPasswords(event.target.value)
    }
    function handleLogin(){
        accounts.map((account) => {
            if(account.username === enteredUsernames && account.password === enteredPassword){
                setIsLoggedin(true);
                setRole(account.role);
            }
        })
    }

function renderLogin(){
    return(
        <div className='container'>
            <h1>Login: </h1>
            Username: <input type='text' placeholder='username' onChange={getUserName}/> <br/>
            Password: <input type='text' placeholder='password' onChange={getPassword}/> <br/>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
function renderShop(){
    return(
        <div className="container">
        <Shop isLoggedin = {isLoggedin}
        items = {items}/>
        </div>
    );
}
function renderAdmin(){
    return(
        <AdminPanel isLoggedIn = {isLoggedin} accounts = {accounts} />
    );
}
if(isLoggedin === false){
    return renderLogin();
} else {
    if (role === "admin"){
        return renderAdmin()

    } else {
        return renderShop()
    }
}
}
