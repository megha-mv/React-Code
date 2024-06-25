import React, { useEffect, useState } from 'react'

const SynchApiCall = () => {

  const [users, setUsers] = useState([]);

  useEffect(()=>{
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', false); 
    xhr.send(null);
    if (xhr.status === 200) {
      console.log(xhr.responseText);
      const allUsers = JSON.parse(xhr.responseText)
      setUsers(allUsers);
     } else {
     console.error('Error:', xhr.status);
     }
  },[])

  return (
    <div>
      {users && users.map((user)=>{
        return (
          <h1>{user.userId}</h1>
        )
      })}
      <h1>user</h1>
    </div>
  )
}

export default SynchApiCall;