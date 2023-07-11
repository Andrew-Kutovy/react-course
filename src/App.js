import React, { createContext, useState } from 'react';
import Child1 from './Сomponents/Child1Component/Child1';
import Child2 from './Сomponents/Child2Component/Child2';

export const DataContext = createContext();

const App = () => {
    const [data, setData] = useState(null);

    return (
        <div>
            <h1>App</h1>
            <DataContext.Provider value={{ data, setData }}>
                <Child1 />
                <Child2 />
            </DataContext.Provider>
        </div>
    );
};

export default App;