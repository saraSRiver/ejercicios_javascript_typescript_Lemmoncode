class Book{
    title:string;
    isRead:boolean;
}

let book1:Book = {
    title: "Tormenta de espadas",
    isRead: true
}
let book2:Book = {
    title: "El hijo infinito",
    isRead: false
}
let book3:Book = {
    title: "Harry Potter y la cámara secreta",
    isRead: false
}
let book4:Book = {
    title: "Sueños de piedra",
    isRead: true
}
let library = [book1,book2,book3,book4];

function isBookRead(books:Book[], title:string) {
    books = library;
    let bookFound = books.find(book => book.title === title);
    if(bookFound) return bookFound.isRead; 
    return false;
}

console.log(isBookRead(library, "El hijo infinito"));
console.log(isBookRead(library, "Sueños de piedra"));
console.log(isBookRead(library, "Don Quijote de la Mancha"));
console.log(isBookRead(library, "Harry Potter y la cámara secreta"));
console.log(isBookRead(library, "Tormenta de espadas"));

