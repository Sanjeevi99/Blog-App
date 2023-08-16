import React, { useEffect, useState } from 'react';
import Post from '../components/post';

const IndexPage = () => {
const [posts,setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/post').then(response => {
      response.json().then(posts => {
        setPosts(posts);
      });
    });
  }, []);

  // console.log(posts.length);

  return (
    <>
    
        {posts.length > 0 && posts.map(post => (
          <Post {...post} />
        ))}
        {/* <Post /> */}
    </>
  )
}

export default IndexPage