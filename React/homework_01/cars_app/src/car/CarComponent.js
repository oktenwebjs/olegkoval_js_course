import React, {Component} from 'react';
import './Car.css';

class CarComponent extends Component {
    render() {
        let {car, selectCarFn} = this.props;

        return (
            <div className="row">Car: {car.producer} {car.model} <button onClick={() => selectCarFn(car)}>Show car details</button></div>
        );
    }
}

export default CarComponent;