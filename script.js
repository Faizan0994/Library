////////////////////////////////////
//Declarations
////////////////////////////////////
var myLibrary = []; //array to store books
var main_section = document.querySelector('.main-section');

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

const createCard = function(book) {//This creates a card
    const card = document.createElement('div');
    card.classList.add('card');

    const heading = document.createElement('h2');
    heading.textContent = book.name;
    card.appendChild(heading);

    const cross = document.createElement('img');
    cross.setAttribute('src', './1544641784.svg');
    card.appendChild(cross);

    const p1 = document.createElement('p');
    p1.classList.add('author');
    p1.textContent = "By " + book.author;
    card.appendChild(p1);

    const p2 = document.createElement('p');
    p2.classList.add('pages');
    p2.textContent = book.pages + " pages";
    card.appendChild(p2);

    //All about the "read" checkbox
    const read = document.createElement('div');
    read.classList.add('read');
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    if(book.read_status === "read") checkbox.checked = true;
    const read_label = document.createElement('label')
    read_label.textContent = "Read: "
    read.appendChild(read_label);
    read.appendChild(checkbox);

    card.appendChild(read);

    main_section.appendChild(card);
}

const displayCards = function(library) {  //For displaying all cards
    while (main_section.firstChild) { //Remove already existing cards
        main_section.removeChild(main_section.lastChild);
      }

    library.forEach(book => { //Create new cards
        createCard(book);
    });
}


/////////////////////////////////////////////
//Working
/////////////////////////////////////////////

displayCards(myLibrary);