import axios from "axios";

const API = {
   async getBooks(book){
        return(axios.get("/api/books",book))
    }
}

export default API;