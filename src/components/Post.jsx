import React, { useState } from 'react';
import PostItem from './PostItem';

import Thumbnail1 from '../images/blog1.jpg';
import Thumbnail2 from '../images/blog2.jpg';
import Thumbnail3 from '../images/blog3.jpg';
import Thumbnail4 from '../images/blog4.jpg';


const DUMMY_POSTS = [
  {
      id: '1',
      thumbnail: Thumbnail1,
      category: 'education',
      title: 'This is the title of the very first post on this blog.',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.',
      authorID: 3
  },
  {
      id: '2',
      thumbnail: Thumbnail2,
      category: 'science',
      title: 'Welcome to Nigeria.',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.',
      authorID: 1
  },
  {
      id: '3',
      thumbnail: Thumbnail3,
      category: 'weather',
      title: 'This is the title of the very third post on this blog.',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.',
      authorID: 13
  },
  {
      id: '4',
      thumbnail: Thumbnail4,
      category: 'farming',
      title: 'This is the title of the very last post on this blog.',
      desc: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.',
      authorID: 11
  },
]
const Post = () => {

  const [posts, setPosts] = useState(DUMMY_POSTS);
  return (
    <section className='posts'>
      <div className='container posts__container'>
        {
          posts.map(({ id, thumbnail, category, title, desc, authorID }) =>
          <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} 
          title={title} desc={desc} authorID={authorID}/>)
        }
     </div>
    </section>
  )
}

export default Post