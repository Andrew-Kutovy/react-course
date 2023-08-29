import React, {useState} from 'react';

const Bbg = () => {

    const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])

    const getAtr = (arr) => {
        let res = 0
        for (const el of arr) {
            res += el
        }
        return res / arr.length
    }
    
    const changer = (id, e) => setArr([...arr.slice(0, id), e.target.value, ...arr.slice(id + 1)])


    return (
        <div>
            <h1> {getAtr(arr)}</h1>
            {arr.map((el, id) =>
                <p>{el}
                    <input type="text" key={id} value={el}
                           onChange={(e)=> changer(id, e)}/>
                </p> )
            }
        </div>
    );
};

export default Bbg;