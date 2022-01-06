import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

// no extension required from './books' since books is a JS file
import {books} from './books';
// compare how books.js and Book.js export their contents. books.js is a named export, Book.js is a default export
// note that you could rename Book in import Book from .. to anything you want, as long as you use the same name in the code on this page
// in this example, you'd need to chnage the Book in the return statement of BookList
import Book from './Book';

function Booklist() {
  return (
    <section className='bookList'>
      {books.map((book) => {
        console.log(book);
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

ReactDom.render(<Booklist />, document.getElementById('root'));