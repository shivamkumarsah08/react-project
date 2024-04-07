import React, { useState ,useEffect} from "react"
function Users(){
    const[users,setUsers]=useState([
        {name:'mohan',age:23},
        {name:'sohan',age:26}
    ]);
    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(data=>{
            setUsers(data)
        })
    }
)
    
}
function User(){
    return(
        <div>
            <h2> Users</h2>
            <ul>
                {
                    Users.map((user,index)=>{
                        return <li>{user.name},{user.email}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Users;