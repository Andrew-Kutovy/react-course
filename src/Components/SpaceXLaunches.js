import React, { useEffect, useState } from 'react';

const SpaceXLaunches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then((response) => response.json())
            .then((data) => {
                const filteredLaunches = data.filter((launch) => launch.launch_year !== '2020');
                setLaunches(filteredLaunches);
            })
            .catch((error) => {
                console.error('Error fetching SpaceX launches:', error);
            });
    }, []);

    return (
        <div>
            <h1>SpaceX Launches</h1>
            <div className={'container'}>
                {launches.map((launch) => (
                    <div key={launch.flight_number} className={'block'}>
                        <p>Mission Name: {launch.mission_name}</p>
                        <p>Launch Year: {launch.launch_year}</p>
                        <img src={launch.mission_patch_small} alt="Mission Patch" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SpaceXLaunches;