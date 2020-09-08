import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer"
import Note from  "./Note"
import notes from "../notes"
import CreateArea from "./CreateArea"





function App(){

    const [notes, setNotes]= useState([]);


    function addNote(note){

        setNotes(prevNotes => {
          return  [...prevNotes, note];
        }
        );
    }


    return (<div>
       <Header/>
       <CreateArea addNote={addNote}/>

        {notes.map(note => {
            return <Note title={note.title} content={note.content}/> 

        })}
       <Footer/>
    </div>
    );
}

export default App;