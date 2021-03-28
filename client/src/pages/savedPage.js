import React, { useState } from "react"
import { useEffect } from "react";
import SavedResults from "../components/savedResults";
import API from "../utils/API";



function savedPage(){

    const [books,setBooks]=useState([]);

    const getBooks = ()=>{
       return API.getBooks().then(({data})=>{
           console.log(data)
            setBooks(data)
            
        });
    }
    useEffect(()=>{
        getBooks()
    },[setBooks])

    return(
        
            
        <SavedResults books={books} getBooks={getBooks}/>
        
)
}

export default savedPage;