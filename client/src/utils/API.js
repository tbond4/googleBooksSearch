import axios from "axios";

const API = {
   async getBooks(){
        return(axios.get("/api/books"))
    },

    async saveBook(book){
        return(axios.post("/api/books",book))
    },
    //AIzaSyBthT17GYlPMfJOuj3E1Oj2wKCWQn2cW7g
    async getGoogleBooks(book){
        console.log(book)
        return(axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`));
    },
    // ${book}
    async deleteBook(bookid){
        return(axios.delete(`/api/books/${bookid}`))

    }
}

export default API;