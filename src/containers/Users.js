import React, { useState } from "react"
function Users(){
    const[users,setUser]=useState([
        {name:'mohan',age:23},
        {name:'sohan',age:26}
    ]);
    
}
function User(){
    return(
        <div>
            <h2> Users</h2>
            <ul>
                {
                    Users.map((user,index)=>{
                        return <li>{user.name},{user.age}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default Users;