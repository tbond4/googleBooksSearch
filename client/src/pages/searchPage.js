import React, { useState } from "react"
import Results from "../components/Results";
import SearchForm from "../components/SearchForm"
function searchPage(){

    const [books, setBooks] = useState([])

return(
    <div>
    <SearchForm setBooks = {setBooks} />
    <Results books={books}/>
    </div>
)
}

export default searchPage;