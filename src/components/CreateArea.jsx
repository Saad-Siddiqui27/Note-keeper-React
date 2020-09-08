import React, { useState } from "react"
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from "@material-ui/core/Fab";  
import Zoom from '@material-ui/core/Zoom';


function CreateArea(props){


    const [isExpanded, setExpanded]= useState(false);


    const [note, setNote]= useState({
        title: "",
        content: ""
    })


    function handleChange(event){
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name] : value
        }; 
        });
    }

    function submitNote(event){
        props.addNote(note);
        setNote({
            title: "",
            content: ""

        });

        
        event.preventDefault();

    }

    function expand(){
        setExpanded(true);
    }


    return(
        <div>
            <form className="create-note">
            {isExpanded ? <input name="title" placeholder="Title" value={note.title}  onChange={handleChange}/> : null}
                
                <textarea onClick={expand} name="content" placeholder="Take a note..." rows={isExpanded ? 3 :1} value={note.content} onChange={handleChange}/>
               
               <Zoom in={isExpanded}>
                <Fab onClick={submitNote}>
                    <AddCircleIcon/>
                </Fab> 
                </Zoom>
            </form>
        </div>
    );

}

export default CreateArea;