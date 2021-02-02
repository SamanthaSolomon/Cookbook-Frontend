import React from "react"
import './App.css';
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Components/Display"
import Form from "./Pages/Form"


function App() {

const url = "http://localhost:4000"

const [books, setBooks] = React.useState([])

//Get all
const getBooks = () => {
  fetch(url + '/api/cookbooks/')
  .then((response) => response.json())
  .then((data) => {
    setBooks(data)
  })
}
//once
React.useEffect(() => {
  getBooks()
}, [])

console.log("books", books)
  return (
    <div className="App">
      <Route exact path="/" render={(rp) => <Display {...rp}
      books={books} 
      />}
      />
      <Form />
    </div>
  );
}

export default App;
