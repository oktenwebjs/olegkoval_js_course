import React, {Component} from 'react';
import {Link} from "react-router-dom";
import { withRouter } from "react-router";
import './user.css';

class UserComponent extends Component {
    render() {
        let {user} = this.props;
        const { match: {path}} = this.props;

        return (
            <div className={"user-item"} key={`user-${user.id}`}>
                <div className={"user-item-name"}>{user.id}. {user.name}</div>
                <div className={"user-item-button"}>
                    <Link to={`${path}/${user.id}/info`}>
                        <button type="button" className="btn btn-primary">Info</button>
                    </Link>
                </div>
                <div className={"user-item-button"}>
                    <Link to={`${path}/${user.id}/posts`}>
                        <button type="button" className="btn btn-info">Posts</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(UserComponent);