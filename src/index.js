import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './index.css';
// variables

const books = [
  
]

const firstBook = {
  // note the syntax, colons and commas as with JS objects
  author: "J.K. Rowling",
  title: "Harry Potter Book 1",
  image: "https://m.media-amazon.com/images/I/413lxIe20jL._SY346_.jpg",
}

const secondBook = {
  // note the syntax, colons and commas as with JS objects
  author: "Someone Else",
  title: "Another book",
  image: "https://m.media-amazon.com/images/I/61gS6EWmWwL.jpg",
}

function Booklist() {
  return (
    // the p element is a child of Book, note how it is nested
    <section className="bookList">
      <Book 
      image={firstBook.image} 
      title={firstBook.title} 
      author={firstBook.author}
      >
        <p style={{ color: '#fff'}}>
          an alternative way to pass the props in this instance would be  and you wouldn't need to do do  or the const
        </p>
      </Book>
      <Book 
      image={secondBook.image} 
      title={secondBook.title} 
      author={secondBook.author}
      />
    </section>
  );
}

// the below is another way to render the html
// const Greeting = () => {
//   return React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'hello world')
//     );
// }

// These components can be inseted into other components
// const Person = () => <h1>John Doe</h1>
// const Message = () => {
//   return (
//     <p>This is a message</p>
//   );
// };


const Book = ({ image, title, author, children }) => {
  return (
    // an alternative way to use props:
    // const { image, title, author } = props;
    // now you'd just use {title} {author} etc

    // an alternative way to pass the props in this instance would be  {props.image} etc with (props) with Book = (props) => 

    // note the inline styling is as JS object, not CSS and has 2 curly braces, this is because it's a javascript object, outer curly brace for JS, inner for the object
    <article className="book">
      <img 
        src={image}
        alt="book"
      />
      <h1 style={{color: '#fff', fontSize: '0.75rem'}}>{title}</h1>
      <h2>{author.toUpperCase()}</h2>
      {children}
    </article>
  )
}

ReactDom.render(<Booklist />, document.getElementById('root'));