import React from 'react'

const PostCard = ({ post }: any) => {
    return (
        <div key={ post.name }>
            { post.title }
            { post.excerpt }
        </div>
    )
}

export default PostCard