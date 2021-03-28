import React from "react"
import {Button} from "react-bootstrap"
import API from "../utils/API"



function DeleteButton({bookId, getBooks }){

    const deleteBook = () => {

        API.deleteBook(bookId).then(()=>{
             return getBooks();
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