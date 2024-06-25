import React, { useEffect, useState } from 'react'

const Users = () => {
  const [usersData, setUserData] = useState([]);
  const [usersDataAll, setUserDataAll] = useState([]);
  // create promise

  const fetchUser = () =>{
    const promiseCreate = new Promise(function(res,rej){
      const userAll = fetch('https://jsonplaceholder.typicode.com/posts');
      if(userAll){
        console.log(userAll);
        res(setUserData(userAll))
      }else{
        rej('no users found')
      }
    })
    promiseCreate.then(users=>console.log(users))
    .catch(err => console.log(err))
  }

  function fetchAllUsers(){
    const userAll = fetch('https://jsonplaceholder.typicode.com/posts');
    userAll.then((resp)=>resp.json()).then((data) => setUserDataAll(data));
  }

  useEffect(()=>{
    fetchUser();
    fetchAllUsers();
  },[]);


  console.log(usersData,'usersData--------');
  console.log(usersDataAll,'usersDataAll--------');
  return (
    <div>
      {usersDataAll && usersDataAll.map((user)=>{
        return (
          <h1>{user.title}</h1>
        )
      })}
    </div>
  )
}

export default Users