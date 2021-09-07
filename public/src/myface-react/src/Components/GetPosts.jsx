import React from "react";

const GetPosts = (pops) => {
    const[posts, setPosts] =  React.useState([]);
  
    React.useEffect(function(){
        async function fetchData(){
          const response = await fetch("http://localhost:3001/posts");
          const json = await response.json();
          setPosts(json.results)
        }
        fetchData();
    }, []);
  
    if (posts.length === 0) {
      return <p>No posts to show</p>
    }
  
    return <ol>
      {posts.map(function(post, index){
        return <li>
          <h2>{post.message}</h2>
          <img className="imgSize" src={post.imageUrl} alt={post.message}/>
          <p>Posted by {post.postedBy.name}</p>
        </li>
      })}
    </ol>
  }

  export default GetPosts;