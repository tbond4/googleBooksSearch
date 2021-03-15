import axios from "axios";

const API = {
   async getBooks(book){
        return(axios.get("/api/books"))
    }
}

export default API;