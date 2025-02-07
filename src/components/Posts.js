import { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Post from './Post';
import { useApi } from '../contexts/ApiProvider';
import More from './More';

// This is connecting the Flask API to here!
const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;

export default function Posts ({ content }) {
// const posts = [];
  const [posts, setPosts] = useState();
  const api = useApi();
  const [pagination, setPagination] = useState();

  let url;
  switch (content) {
    case 'feed':
    case undefined:
      url = '/feed';
      break;
    case 'explore': 
      url = '/posts';
      break;
    default:
      url = `/users/${content}/posts`;
      break;
  }

  useEffect(() => {
    (async() => {
      const response = await api.get(url);
      if(response.ok) {
        setPosts(response.body.data); 
        setPagination(response.body.pagination);
      }
      else {
        setPosts(null);
      }
    })();
    },[api, url]);
    
  const loadNextPage = async() => {
    const response = await api.get(url, {
      after: posts[posts.length-1].timestamp
    });
    if(response.ok) {
      setPosts([...posts, ...response.body.data]);
      setPagination(response.body.pagination);
    }
  };


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
              <More pagination={pagination} loadNextPage={loadNextPage} />
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