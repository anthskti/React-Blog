import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Post from './Post';

// This is connecting the Flask API to here!
const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default function Posts () {
// const posts = [];
  const [posts, setPosts] = useState();

  useEffect(() => {
    (async() => {
      const response = await fetch(BASE_API_URL + "api/feed");
      if(response.ok) {
        const results = await response.json();
        setPosts(results.data); 
      }
      else {
        setPosts(null);
      }
    })();
    },[]);
    

  return (
    <>
      {posts === undefined ? 
        <Spinner animation="border" />
      : 
        <>
          {posts === null ? 
            <p>Could not retrieve blog posts.</p>
          : 
            <>
              {posts.length === 0 ?
              <p>There are no blog posts.</p>
              :
              posts.map(post => <Post key={post.id} post={post} />)
              }
          </>
          }
        </>
      }
    </>
  );
  }


// Empty tags are used are nice because they do not produce any render output. Creating fragements. 
// Replaced with Container to give it some padding; fluid attribute to change with window size. 
// Similar to a div

// deleted in chapter 5
// const posts = [
//   {
//     id: 1,
//     text: "Hello, World!",
//     timestamp: "a minute ago",
//     author: {
//       username: 'susan'
//     },
//   },
//   {
//     id: 2,
//     text: "Second Post",
//     timestamp: "an hour ago",
//     author: {
//       username: 'john'
//     },
//   },
// ];