import React, {useEffect, useState} from 'react';
import listService from "../../services/listService";

const List = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        listService.getAll().then(({data})=>{
            console.log(data)
            return setList(data)
        })
    }, []);

    return (
        <div>
            {console.log(list)}
        </div>
    );
};

export default List;