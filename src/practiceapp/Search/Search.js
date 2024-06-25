import React, { useCallback, useState } from 'react';

const debounceFunc = (cb, delay) => {
  let timerId;
  return (...args) => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

const Search = () => {
  const [searchText, setSearchText] = useState([]);
  const [search, setSearch] = useState('');


    
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchText(value);
    console.log('Searching for:', value);
  };

  const handleChangeSearch =(e)=>{
    const {value} = e.target;
    setSearch(value);
    console.log('Searching for in handleChangeSearch:', value);
  }
  
  const debouncedHandleSearch = debounceFunc(handleChange, 2000);
  const optimisedchange = useCallback(debounceFunc(handleChangeSearch, 3000),[]);

  return (
    <div>
      <h1>Enter search here</h1>
      <input type='text' name='search' placeholder='Enter something ....  '  onChange={debouncedHandleSearch}></input>
      <h1>{searchText}</h1>
      <textarea placeholder='write something here.....' onChange={optimisedchange}></textarea>
      <h2>{search}</h2>
    </div>
  )
}

export default Search