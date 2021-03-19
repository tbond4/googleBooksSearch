import React from "react"
import {Button} from "react-bootstrap"
import API from "../utils/API"



function DeleteButton({bookId }){

    const deleteBook = () => {

        API.deleteBook(bookId).then(()=>{

        }).catch((err)=>{
            console.log(err.response.data)
        })
    };
return(
    <Button onClick={deleteBook} variant="primary" >
          Delete
    </Button>
);
}

export default DeleteButton;