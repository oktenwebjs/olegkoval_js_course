import React, {Component} from "react";
import './Cars.css';
import CarComponent from "../car/CarComponent";
import CarDetailsComponent from "../carDetails/CarDetailsComponent";

class CarsComponent extends Component {
    state = {selectedCar: null}

    selectCarFn = (selectedCar) => this.setState({selectedCar});

    render() {
        let {cars} = this.props;
        let {selectedCar} = this.state;

        return (
            <div className="cars">
                <h3>Cars:</h3>
                {
                    cars.map((car, idx) => <CarComponent car={car} selectCarFn={this.selectCarFn} key={idx}/>)
                }

                {selectedCar && <h3>Car details:</h3>}
                {selectedCar && <CarDetailsComponent car={selectedCar}/>}
            </div>
        );
    }
}

export default CarsComponent;