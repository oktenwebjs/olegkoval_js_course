import React, {Component} from 'react';
import './User.css';

class UserComponent extends Component {
    render() {
        let {user, selectUserFn} = this.props;

        return (
            <div className="row">
                Name: {user.name} - Age: {user.age} - Status: {user.status.toString()}
                {selectUserFn && <button onClick={() => {selectUserFn(user)}}>Select Me</button>}
            </div>
        );
    }
}

export default UserComponent;