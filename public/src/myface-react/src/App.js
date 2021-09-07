import React from "react";
import logo from './logo.svg';
import './App.css';

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

function App() {
  return (
    <div className="App">
    <GetPosts />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
