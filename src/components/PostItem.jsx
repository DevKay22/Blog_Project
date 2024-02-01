import React from 'react';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor'

const PostItem = ({postID, category, title, desc, authorID, thumbnail}) => {
    const shortDesc = desc.length > 145 ? desc.substr(0, 145 ) + '...': desc;
    const postTitle = title.length > 30 ? title.substr(0, 30 ) + '...': title;
  return (
    <article className='post'>
        <div className='post__thumbnail'>
            <img src={thumbnail} alt={postTitle}/>
        </div>

        <div className='post__content'>
            <Link to={`/posts/${postID}`}>
                <h3>{postTitle}</h3>
            </Link>

            <p>{shortDesc}</p>
        </div>

        <div className='post__footer'>
            <PostAuthor />
            <Link to={`/posts/category/${category}`} className='btn category'>{category}</Link>
        </div>

    </article>
  )
}

export default PostItem