function Book(title, author, pages, read= false){
    this.title= title;
    this.author= author; 
    this.pages= pages;
    this.read= read;
    this.info= function () {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.read ? "already read" : "not read yet");
    }
}

document.querySelector('.add-button').addEventListener('click', () => {
    document.getElementById('book-dialog').showModal();
});

document.querySelector('.cancel-button').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('book-dialog').close();
})

document.getElementById('book-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title= document.getElementById('title').value;
    const author= document.getElementById('author').value;
    const pages= document.getElementById('pages').value;
    const read= document.getElementById('read').checked;

    const newBook= new Book(title, author, pages, read);

    addBookToLibary(newBook);

    document.getElementById('book-dialog').close();
    document.getElementById('book-form').reset();
})

function addBookToLibary(book) {
    const bookList= document.querySelector('.book-list');
    const bookItem= document.createElement('div');
    bookItem.classList.add('book-item');

    const title= document.createElement('h4');
    title.textContent= `Title: ${book.title}`;

    const author= document.createElement('p');
    author.textContent= `Author: ${book.author}`;

    const pages= document.createElement('p');
    pages.textContent= `Pages: ${book.pages}`;

    const read= document.createElement('p');
    read.textContent= book.read ? 'Read: ✅' : 'Read: ❌'
    
    const deleteButton= document.createElement('button');
    deleteButton.textContent= 'Delete';
    deleteButton.classList.add('delete-button');

    deleteButton.addEventListener('click', () => {
        bookItem.remove();
    });

    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Toggle Read Status';
    toggleButton.classList.add('toggle-button');

    toggleButton.addEventListener('click', () => {
        book.read = !book.read;
        read.textContent = book.read ? 'Read: ✅' : 'Read: ❌'; 
    });

    bookItem.appendChild(title);
    bookItem.appendChild(author);
    bookItem.appendChild(pages);
    bookItem.appendChild(read);
    bookItem.appendChild(deleteButton);
    bookItem.appendChild(toggleButton);

    bookList.appendChild(bookItem);
}