import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import Note from  "./Note"
import notes from "../notes"


function createNotes(props){

    return(
        <Note
           title= {props.title}
           content = {props.title}
        />
    )
}


function App(){
    return <div>
       <Header/>
       {notes.map(createNotes)}
       <Footer/>
       

    </div>
}

export default App;