import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css';
// variables

const books = [

  {
    // each list item should have a unique key, id in this case. Notice when Book is returned in BookList, how each object  key is assigned the id of each object
    id: 1,
    author: "J.K. Rowling",
    title: "Harry Potter Book 1",
    image: "https://m.media-amazon.com/images/I/413lxIe20jL._SY346_.jpg",
  },
  {
    id: 2,
    author: "Someone Else",
    title: "Another book",
    image: "https://m.media-amazon.com/images/I/61gS6EWmWwL.jpg",
  },
  {
    id: 3,
    author: "Another Person",
    title: "One more book",
    image: "https://images-na.ssl-images-amazon.com/images/I/41mAMaGHfqL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 4,
    author: "A writer",
    title: "Catepillar book",
    image: "https://images-na.ssl-images-amazon.com/images/I/41w4B0f21VL._SY349_BO1,204,203,200_.jpg",
  },
    
];

// enter newName into the BookList function for the code below
// below, the array names is passed to newName, which loops over the names with .map, map seems to work just like a for loop, 
// then returns the name as a h1 element. Without the JSX <h1>{na.. then it renders as tomdickharry. Also, not how the console 
// log of newName are arrays with lots of metadata

// const names = ['tom', 'dick', 'harry'];
// const newName = names.map((name) => {
//   console.log(name)
//   return <h1>{name}</h1>
// })
// console.log(newName);

function Booklist() {
  return (
    <section className='bookList'>
      {books.map((book) => {
        console.log(book);
        // an alternative to book={book} is {...book}, it's a spread operator, the idea is all the properties are spread out like an object
        return <Book key={book.id} book={book}></Book>;
      })}
    </section>
  );
}

const Book = (props) => {
  console.log(props);
  const { image, title, author } = props.book;

  return (
    <article className="book">
      <img src={image} alt="book"/>
      <h1 style={{color: '#fff', fontSize: '0.75rem'}}>{title}</h1>
      <h2>{author.toUpperCase()}</h2>
    </article>
  )
};

ReactDom.render(<Booklist />, document.getElementById('root'));