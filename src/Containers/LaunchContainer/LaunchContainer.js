import React, {useEffect, useState} from 'react';
import LaunchComponent from "./LaunchComponent/LaunchComponent";

const LaunchContainer = () => {
    const [launches, setLaunches] = useState([])

    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(res => res.json())
            .then(launches => setLaunches(launches))
    }, [])


    return (
        <>
            {launches
                .filter(launch => launch.launch_year !== '2020')
                .map((launch, id) => <LaunchComponent  key={id} launch={launch}/>)}
        </>
    );
};

export default LaunchContainer;