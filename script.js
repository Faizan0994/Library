////////////////////////////////////
//Declarations
////////////////////////////////////
var myLibrary = []; //array to store books

function book(name, author, pages, read_status) {//A book object constructor
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
    this.info = function(name, author, pages, read_status){
        console.log(`${this.name}, by ${this.author}, ${this.pages} pages, ${this.read_status}.`);
    }
}