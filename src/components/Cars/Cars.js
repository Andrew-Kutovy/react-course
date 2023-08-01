import React, {Component} from 'react';
import {carsService} from "../../services/carsService";
import Car from "./Car/Car";

class Cars extends Component{
    constructor(props) {
        super(props);
        this.state = {
            cars: []
        };
    }

    componentDidMount() {
        carsService.getAll().then(({data})=> this.setState({cars: data}))
    }

    render() {
        const {cars} = this.state;
        return (
            <div>
                {cars.map((car)=> <Car key={car.id} car={car}/>)}
            </div>
        );
    }
};

export default Cars;