import React, {useState} from "react";
import './App.css'
import NoteApp from "./TodoList";



function App(){

    return(
        <div className="app">
           <NoteApp/>
        </div>
    )
}

export default App;

/* 
First need to be able to add 1

I need to increase by one when clicking a button
    need the starting value, 0
    need the 2 buttons, minus, plus

add a number when click button
    so we need a state because it will change the UI
    the state will initially start at 0


*/