import React, { useEffect } from 'react'
import axios from "axios";

const userlist = () => {
    const[listofusers,setlistofusers]= usestate([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setlistofusers(response.data))
        .catch((error) => console.log(err));
    } , [] );
    console.log("listofusers");
  return (
    <div>
        {listofusers.map((user,index)=> (
            <div>
                <h1>id:{user.id}</h1>
                <p>name:{user.name}</p>
            </div>
        ))

        }
    </div>
  );
};

export default userlist