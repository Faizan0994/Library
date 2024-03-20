////////////////////////////////////
//Declarations
////////////////////////////////////
var myLibrary = []; //array to store books
var main_section = document.querySelector('.main-section');
var addBookButton = document.querySelector('.add-book');
var createBookButton = document.createElement('button');
var footer = document.querySelector('.footer')
var buttonContainer = document.querySelector('.button-container');

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

const displayForm = function() {
    //creates the form and all inputs
    const form = document.createElement('form');
    form.action = "";
    
    const legend = document.createElement('legend');
    legend.textContent = "Enter info about the book";
    form.appendChild(legend);

    const row1 = document.createElement('div');
    row1.classList.add('form-row');
    const titleLabel = document.createElement('label');
    titleLabel.textContent = "Title:";
    titleLabel.setAttribute('for', 'title');
    row1.appendChild(titleLabel);
    var titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('name', 'title');
    row1.appendChild(titleInput);
    form.appendChild(row1);

    const row2 = document.createElement('div');
    row2.classList.add('form-row');
    const authorLabel = document.createElement('label');
    authorLabel.textContent = "Author:";
    authorLabel.setAttribute('for', 'author');
    row2.appendChild(authorLabel);
    var authorInput = document.createElement('input');
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('id', 'author');
    authorInput.setAttribute('name', 'author');
    row2.appendChild(authorInput);
    form.appendChild(row2);

    const row3 = document.createElement('div');
    row3.classList.add('form-row');
    const pagesLabel = document.createElement('label');
    pagesLabel.textContent = "No. of pages:";
    pagesLabel.setAttribute('for', 'pages');
    row3.appendChild(pagesLabel);
    var pagesInput = document.createElement('input');
    pagesInput.setAttribute('type', 'number');
    pagesInput.setAttribute('id', 'pages');
    pagesInput.setAttribute('name', 'pages');
    row3.appendChild(pagesInput);
    form.appendChild(row3);

    const row4 = document.createElement('div');
    row4.classList.add('form-read-status');
    const readLabel = document.createElement('label');
    readLabel.textContent = "Read:";
    readLabel.setAttribute('for', 'read');
    row4.appendChild(readLabel);
    var readInput = document.createElement('input');
    readInput.setAttribute('type', 'checkbox');
    readInput.setAttribute('id', 'read');
    readInput.setAttribute('name', 'read');
    row4.appendChild(readInput);
    form.appendChild(row4);
    var read;

    createBookButton.setAttribute('type', 'submit');
    createBookButton.classList.add('create-book');
    createBookButton.textContent = "Create Book";
    form.appendChild(createBookButton);

    main_section.appendChild(form);

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        readInput.checked == true? read = "read": read = "not read";
        myLibrary.push(new book(titleInput.value, authorInput.value, pagesInput.value, read));
        displayCards(myLibrary);
        buttonContainer.appendChild(addBookButton);
        main_section.style.backgroundColor = "#dfb863"
    });
}


/////////////////////////////////////////////
//Working
/////////////////////////////////////////////

displayCards(myLibrary);

addBookButton.addEventListener('click', () => {
    while (main_section.firstChild) { //Remove already existing cards
        main_section.removeChild(main_section.lastChild);
    }
    addBookButton.remove();
    main_section.style.backgroundColor = "white";
    displayForm();
});