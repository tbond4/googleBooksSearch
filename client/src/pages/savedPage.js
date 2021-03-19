import React from "react"
import { useEffect } from "react";
import savedResults from "../components/savedResults";
import API from "../utils/API";
import SearchForm from "./components/SearchFrom"


function savedPage(){

    const [books,setBooks]=useState([]);

    useEffect(()=>{
        API.getBooks().then(({data})=>{
            setBooks(data)
        });
    },[setBooks])

    return(
        <savedResults books={books}/>
)
}

export default savedPage;