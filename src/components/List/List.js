import React, {useEffect, useState} from 'react';
import listService from "../../services/listService";

const List = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        listService.getAll().then(({data})=>setList(data))
    }, []);
    console.log(list)
    return (
        <div>
            hghg
        </div>
    );
};

export default List;