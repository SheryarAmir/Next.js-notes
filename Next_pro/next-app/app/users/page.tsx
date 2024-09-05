import React from "react";


interface User{
    id: number;
    name:string;

}

const UsersPage = async() => {
  const result=  await fetch('https://jsonplaceholder.typicode.com/users')
  const users:User[]=await result.json();

  return (
    <div>
      <h1>this is page of uers</h1>
      <p>{new Date().toLocaleTimeString()}</p>
     {users.map(user=><li key={user.id}>{user.name}</li>)}
    </div>
  );
};

export default UsersPage;
