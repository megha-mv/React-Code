import React, { useState, useEffect } from 'react';

function SearchComponentThrottle() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [throttledSearch] = useState(() => {
    let timeoutId;
    return (term) => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fetch(`https://api.example.com/search?q=${term}`)
          .then((response) => response.json())
          .then((data) => {
            setResults(data);
          })
          .catch((error) => {
            console.error(error);
          });
      }, 500);
    };
  });

  useEffect(() => {
    throttledSearch(searchTerm);
  }, [searchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <ul>
        {results.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchComponentThrottle;
