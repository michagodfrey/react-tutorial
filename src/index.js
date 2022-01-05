import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function Booklist() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
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

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
    
  )
}

function Title() {
  return (
    <h1>Harry Potter and the Sorcerer's Stone</h1>
  );
}

const Image = () => {
  return <img src="https://m.media-amazon.com/images/I/413lxIe20jL._SY346_.jpg" alt="book"/>
}

const Author = () => {
  return <h2>J.K. Rowling</h2>
}

ReactDom.render(<Booklist />, document.getElementById('root'));