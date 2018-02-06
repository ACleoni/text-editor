import React from 'react';


class Posts extends React.Component {
    render(){
        return (
            <ul>
                {this.props.posts.map(post =>(
                    <li key={post.id}>
                        {post.title}<br></br>{post.content}
                    </li>
                ))}
            </ul>
        )
    }
}

export default Posts