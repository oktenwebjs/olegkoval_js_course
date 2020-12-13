import React, {Component} from 'react';
import ApiService from "../../services/ApiService";
import './user-details.css'

class UserDetailsComponent extends Component {
    state = {userDetails: null}
    apiService = new ApiService();

    async componentDidMount() {
        let {id} = this.props;

        const userDetails = this.apiService.getUserDetails(id);
        userDetails.then((userDetails) => {
            this.setState({userDetails});
        });
    }

    render() {
        let {userDetails} = this.state;

        return (
            <div>
                {
                    userDetails && (
                        <div className={"user-details"}>
                            <div className="name">{userDetails.name}</div>
                            <div className="username">{userDetails.username}</div>
                            <div className="phone"><span>Phone:</span> {userDetails.phone}</div>
                            <div className="email"><span>Email:</span> {userDetails.email}</div>
                            <div className="website"><span>Website:</span> {userDetails.website}</div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default UserDetailsComponent;