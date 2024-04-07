import React ,{useState}from 'react';
function Databinding(){
    
    const handleChange=(event)=>{
        let value = event.target.value;
        setData({
            ...data,name:value
        });
    }
    const [data,setData]=useState({
        name:"Shivam",
        age:25
    })
    return(
        <div>
            <h2>Databinding</h2>
            <h4>
                on Way binding:{data.name}
                {data.age}
            </h4>
            <div>
                <input type ='text'
                value={data.name}
                onChange={handleChange}/>
            </div>
        </div>
        
    )
}
export default Databinding;