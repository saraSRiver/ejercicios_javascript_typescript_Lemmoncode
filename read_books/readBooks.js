const books = [
        { title: "Aprendiz de asesino", isRead: true },
        { title: "El jinete del silencio", isRead: false },
        { title: "Colmillo Blanco", isRead: false },
        { title: "Jaulas de seda", isRead: true },
      ];

function isBookRead(books, titleToSearch){
  // sin array.prototype
  // for(let book of books){
  //     if(book.title === titleToSearch) return book.isRead;
  //     return false;
  // }

  // con array.prototype
  const bookFound = books.find(book => book.title === titleToSearch);
  if(bookFound) return bookFound.isRead; 
  return false;
}

console.log(isBookRead(books, "Aprendiz de asesino"));
console.log(isBookRead(books, "El jinete del silencio")); 
console.log(isBookRead(books, "Los Juegos del Hambre")); 