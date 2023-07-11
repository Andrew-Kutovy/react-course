import React, { useContext } from 'react';
import { DataContext } from '../../../App';

const SubChild1_1 = () => {
    const { data } = useContext(DataContext);

    return (
        <div>
            <h3>SubChild1_1</h3>
            <p>Name: {data ? data.name : ''}</p>
            <p>Age: {data ? data.age : ''}</p>
            <p>Email: {data ? data.email : ''}</p>
        </div>
    );
};

export default SubChild1_1;