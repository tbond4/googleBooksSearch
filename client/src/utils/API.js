import axios from "axios";

const API = {
   async getBooks(){
        return(axios.get("/api/books"))
    },

    async saveBook(book){
        return(axios.post("/api/books",book))
    },
    async getGoogleBooks(){

    },
    async deleteBook(bookid){
        return(axios.delete(`/api/books/${bookid}`))

    }
}

export default API;