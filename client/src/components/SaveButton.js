import React from "react"
import {Button} from "react-bootstrap"
import API from "../utils/API"



function SaveButton({book }){

    const saveBook = () => {

        API.saveBook(book).then(()=>{

        }).catch((err)=>{
            console.log(err.response.data)
        })
    };
return(
    <Button onClick={saveBook} variant="primary" >
          Save
    </Button>
);
}

export default SaveButton;