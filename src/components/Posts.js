export default function Posts () {
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
// Replaced with Container to give it some padding; fluid attribute to change with window size. 
// Similar to a div