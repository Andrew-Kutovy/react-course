import React, { useContext } from 'react';
import { DataContext } from '../../../App';

const SubChild2_2 = () => {
    const { setData } = useContext(DataContext);

    const handleClick = () => {
        const data = {
            name: 'John Doe',
            age: 30,
            email: 'johndoe@example.com'
        };
        setData(data);
    };

    return (
        <div>
            <h3>SubChild2_2</h3>
            <button onClick={handleClick}>Send Data</button>
        </div>
    );
};

export default SubChild2_2;