import axios from "axios";

const API = {
   async getBooks(book){
        return(axios.get("/api/books",book))
    },

    async saveBook(book){
        return(axios.post("/api/books",book))
    }

}

export default API;