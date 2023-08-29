import React, {useState} from 'react';

const Copy = () => {
    const [value, setValue] = useState('');
    const [mass, setMass] = useState([1,2,3,4,5])

    const doSmth = (id)=>{
        let copy = [...mass]
        copy[id] = copy[id] **2
        setMass(copy)
    }

    const del = (id)=>{
        let copy = [...mass]
        copy.splice(id,1)
        setMass(copy)
    }

    return (
        <div>
            <ul>
                {mass.map((el, id) =>
                    <li key={id} onClick={()=>doSmth(id)}>{el} <button onClick={()=>del(id)}>del this</button> </li>
                )}
            </ul>
            <input  value={value} onChange={(e)=>setValue(e.target.value)}/>
            <button onClick={() =>{setMass([...mass, value]); setValue('')}}>add to list</button>
        </div>

    )
};

export default Copy;