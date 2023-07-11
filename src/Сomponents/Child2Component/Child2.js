import React from 'react';
import SubChild2_1 from './SubComponents/SubChild2_1';
import SubChild2_2 from './SubComponents/SubChild2_2';

const Child2 = () => {
    return (
        <div>
            <h2>Child2</h2>
            <SubChild2_1 />
            <SubChild2_2 />
        </div>
    );
};

export default Child2;