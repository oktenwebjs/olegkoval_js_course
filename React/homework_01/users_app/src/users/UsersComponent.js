import React, {Component} from 'react';
import './Users.css';
import UserComponent from '../user/UserComponent';

class UsersComponent extends Component {
    state = {selectedUser: null}

    selectUserFn = (selectedUser) => this.setState({selectedUser});

    render() {
        let {users} = this.props;
        let {selectedUser} = this.state;

        return (
            <div className="users-list">
                <h3>Users list:</h3>
                {
                    users.map((user, idx) => <UserComponent user={user} key={idx} selectUserFn={this.selectUserFn}/>)
                }

                {selectedUser && <h3>Selected User</h3>}
                {selectedUser && <UserComponent user={selectedUser} />}

            </div>
        );
    }
}

export default UsersComponent;