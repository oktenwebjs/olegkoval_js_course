import React, {Component} from 'react';
import UserComponent from "../user/UserComponent";
import ApiService from "../../services/ApiService";
import {Route, Switch} from "react-router-dom";
import UserDetailsComponent from "../user-details/UserDetailsComponent";
import UserPostsComponent from "../user-posts/UserPostsComponent";

class UsersComponent extends Component {
    state = {users: []}
    apiService = new ApiService();

    async componentDidMount() {
        const users = this.apiService.getUsers();
        users.then((users) => {
            this.setState({users});
        });
    }

    render() {
        let {users} = this.state;
        return (
            <div className="row">
                <div className="col" key={"users"}>
                    {
                        (!users || users.length === 0) && (
                            <div>Loading ...</div>
                        )
                    }
                    {
                        users && users.map((user) => {
                            return <UserComponent user={user} key={user.id} />
                        })
                    }
                </div>
                <div className="col" key={"user-details"}>
                    <Switch>
                        <Route path={"/users/:id/info"} render={({match: {params: {id}}}) => {
                            return <UserDetailsComponent id={id} key={id}/>
                        }} />
                        <Route path={"/users/:id/posts"} render={({match: {params: {id}}}) => {
                            return <UserPostsComponent id={id} key={id}/>
                        }} />
                    </Switch>
                </div>
            </div>
        )
    }
}

export default UsersComponent;