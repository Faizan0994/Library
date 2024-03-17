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

//Default books
const book1 = new book("Life in the middle ages", "Robert Hartmann", 352, "not read");
const book2 = new book("The art of peace", "Brandon Taylor", 480, "not read");
const book3 = new book("Great Inventions", "Dr. Darwin", 364, "not read");
const book4 = new book("Basic Algebra and Trigonometry", "Michael Robertson", 273, "not read");

myLibrary.push(book1, book2, book3, book4); //Adding default books to the library