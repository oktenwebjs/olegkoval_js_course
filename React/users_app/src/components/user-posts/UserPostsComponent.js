import React, {Component} from 'react';
import ApiService from "../../services/ApiService";
import './user-posts.css'

class UserPostsComponent extends Component {
    state = {userPosts: []}
    apiService = new ApiService();

    async componentDidMount() {
        let {id} = this.props;

        const userPosts = this.apiService.getUserPosts(id);
        userPosts.then((userPosts) => {
            this.setState({userPosts});
        });
    }

    render() {
        let {userPosts} = this.state;

        return (
            <div className={"user-posts-container"}>
                {
                    userPosts.length !== 0 && userPosts.map((userPost) => {
                        return (
                            <div className={"user-posts"} key={userPost.id}>
                                <div className="title">{userPost.title}</div>
                                <div className="body">{userPost.body}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default UserPostsComponent;