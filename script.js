const addModal = document.getElementById('add-modal')
const closeModalButton = document.getElementById('close-modal-button')
const openModalButton = document.getElementById('open-modal-button')


function closeModal() {
    addModal.style.display = 'none'
}


function openModal() {
    addModal.style.display = 'flex'
}

closeModalButton.addEventListener('click', closeModal)
openModalButton.addEventListener('click', openModal)



let books = [{
        id: 1,
        title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
        authors: 'Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm',
        year: '1994',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg'
    },
    {
        id: 2,
        title: 'JavaScript: The Good Parts',
        authors: 'Douglas Crockford',
        year: '2008',
        image: 'https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg'
    },
    {
        id: 3,
        title: 'JavaScript Patterns: Build Better Applications with Coding and Design Patterns',
        authors: 'Stoyan Stefanov',
        year: 2008,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg'
    },
    {
        id: 4,
        title: 'JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)',
        authors: 'David Flanagan',
        year: 2011,
        image: 'https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg'
    }
]

const container = document.getElementById("container")

function renewBooks() {
    container.innerHTML = ""
    books.forEach((book) => {
        container.innerHTML +=
            `
        <div class="book-cont" id='book-cont'>
        
            <img class="image" src="${book.image}">
            <p class="title">${book.title}</p>
            <p class="year">${book.year}</p>
           
          <div class="authors">
            <p class="author main">${book.authors}</p>
           </div>
            <div class="buttons">
            <button onclick="buttonChange()" class="button add">Изменить</button>
            <button onclick="buttonDelete(${book.id})" class="button">Удалить</button>
            </div>
            
        </div>
        `
    })
}


function workJson() {
    const booksJson = JSON.stringify(books)
    localStorage.setItem('books', booksJson)
}

function addBook() {

    const titleValue = document.getElementById("title").value
    const authorsValue = document.getElementById("authors").value
    const yearValue = document.getElementById("year").value
    const linkValue = document.getElementById("link").value

    const book = {
        title: titleValue,
        authors: authorsValue,
        year: yearValue,
        image: linkValue
    }
    books.push(book)
    renewBooks()

    document.getElementById("title").value = ""
    document.getElementById("authors").value = ""
    document.getElementById("year").value = ""
    document.getElementById("link").value = ""

    closeModal()
    workJson()
}


function buttonDelete(id) {
    const book = books.find((s) => {
        return s.id === id
    })

    const bookIndex = books.indexOf(book)
    books.splice(bookIndex, 1)

    renewBooks()
    workJson()
}

const myButton = document.getElementById('add-student-button')
myButton.addEventListener('click', addBook)


const booksJson = localStorage.getItem('books')
if (booksJson) {
    books = JSON.parse(booksJson)
}
renewBooks()