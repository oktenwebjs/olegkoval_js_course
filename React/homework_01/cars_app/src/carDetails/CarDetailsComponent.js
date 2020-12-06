import React, {Component} from "react";
import './CarDetails.css';

class CarDetailsComponent extends Component {
    render() {
        let {car} = this.props;

        return (
            <div>
                Year: {car.year}<br/>
                Color: {car.color}<br/>
                Type: {car.type}<br/>
                Engine: {car.engine}<br/>
                Volume: {car.volume}<br/>
                Power: {car.power}
            </div>
        );
    }
}

export default CarDetailsComponent;