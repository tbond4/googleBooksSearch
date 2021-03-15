import React from "react"
import SearchForm from "./components/SearchFrom"
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