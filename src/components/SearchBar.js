import { useState } from "react";
import './SearchBar.css'


function SearchBar({ onSubmit }) {

  const [term, setTerm] = useState('');

  //event handler function
  const handleFormSubmit = (event) => {
    event.preventDefault(); //prevent that default action

    // onSubmit(
    //   //never do this
    //   //document.querySelector('input').value
    //   term
    // )
    onSubmit(term);
  };

  //event handler function
  const handleChange = (event) => {
    //console.log(event.target.value);
    setTerm(event.target.value); //changes value of term

    // set term function makes our whole page rerender
    //just how it works ig.....
  };

  //we add css to div as a class name
  return (
    // value={term} is used to capture input

    <div className="search-bar">
      <form onSubmit={handleFormSubmit}>
        <input value = {term} onChange={handleChange}/>
      </form>
    </div>
  );
}

export default SearchBar;
