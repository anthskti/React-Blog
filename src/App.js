// component names must begin with a capital letter, generally written in CamelCase
export default function App() {
  // const posts = [];
  const posts = [
  {
    id: 1,
    text: "Hello, World!",
    timestamp: "a minute ago",
    author: {
      username: 'susan'
    },
  },
  {
    id: 2,
    text: "Second Post",
    timestamp: "an hour ago",
    author: {
      username: 'john'
    },
  },
  ];
  

  return (
    <>
      <h1>Microblog</h1>
      {posts.length === 0 ? 
        <p>There are no blog posts.</p>
      :
        posts.map(post => {
          return (
            // using 'key' will render elements based on their unique key/id  
            <p key = {post.id}>  
              <b>{post.author.username}</b> &mdash; {post.timestamp}
              <br />
              {post.text}
            </p>
          );
        })
      }
    </>
  );
}

// Empty tags are used are nice because they do not produce any render output. Creating fragements. 