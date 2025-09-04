
import React, { useState } from 'react'
import axios from 'axios'
import Gallery from './Gallery';

const App = () => {

 const apiKey = "98699860b8414cfeb71bd30f6e602157";

const [search , setSearch] = useState("");
const [data , setData] = useState([]);

const changeHandler = e =>{
    setSearch(e.target.value);
}

 
  const submitHandler = (e) => {
    e.preventDefault();
    axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=${apiKey}`)
      .then((response) => {
        // Spoonacular returns results in 'data.results'
        if (response.data.results && response.data.results.length > 0) {
          setData(response.data.results);
          console.log(response.data.results); // Check the data in console
        } else {
          setData([]);
        }
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setData([]);
      });
  }
  return (
    <div>
      <center>
        <h2>Search what You Want</h2>
          <form onSubmit={submitHandler}>
               <input size="30" type='text' value={search} onChange={changeHandler}/> <br/><br/>
               <input type='submit' name='search'/>
          </form><br/>
          {data.length>=1?<Gallery data={data}/>:<h4>data not found</h4>}
      </center>
    </div>
  )
}

export default App
