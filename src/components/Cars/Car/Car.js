import React, {Component} from 'react';

class Car extends Component{
    render() {
        const {car} = this.props;
        const {id, brand, price, year} = car
        return (
            <div>
                <p>id:{id}</p>
                <p>brand:{brand}</p>
                <p>price:{price}</p>
                <p>year:{year}</p>
                <hr/>
            </div>
        );
    }
};

export default Car;