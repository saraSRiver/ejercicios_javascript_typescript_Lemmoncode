var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());
var book1 = {
    title: "Tormenta de espadas",
    isRead: true
};
var book2 = {
    title: "El hijo infinito",
    isRead: false
};
var book3 = {
    title: "Harry Potter y la cámara secreta",
    isRead: false
};
var book4 = {
    title: "Sueños de piedra",
    isRead: true
};
var library = [book1, book2, book3, book4];
function isBookRead(books, title) {
    books = library;
    var bookFound = books.find(function (book) { return book.title === title; });
    if (bookFound)
        return bookFound.isRead;
    return false;
}
console.log(isBookRead(library, "El hijo infinito"));
console.log(isBookRead(library, "Sueños de piedra"));
console.log(isBookRead(library, "Don Quijote de la Mancha"));
console.log(isBookRead(library, "Harry Potter y la cámara secreta"));
console.log(isBookRead(library, "Tormenta de espadas"));
