import React from 'react';
import styles from './LaunchComponent.module.css';

const LaunchComponent = (props) => {
    let {launch} = props
    return (
        <div className={styles.container}>
            <p>flight_number: {launch.flight_number}</p>
            <p>mission_name: {launch.mission_name}</p>
            <p>launch_year: {launch.launch_year}</p>
            <img src={launch.links.mission_patch_small} alt={'photo'}/>
        </div>
    );
};

export default LaunchComponent;