import React, {useState} from 'react';

const CodeMu = () => {
    const [val, setVal] = useState('')
    const [arr, setArr] = useState([1,2,3,4,5])

    const deliter = (id) => {
        let copy = [...arr]
        copy.splice(id,1)
        setArr(copy)
    }


    return (
        <div>
            <p>{arr.map((el, id)=>
                <p key={id}>{el}
                    <button onClick={deliter}>del this</button>
                </p>)}
            </p>
            <input type="text" value={val} onChange={(e) => setVal(e.target.value)}/>
            <button onClick={() =>{setArr([...arr, val]); setVal('')}}>add to list</button>
        </div>
    );
};

export default CodeMu;