// import "./App.css";
import PostList from "./components/Posts/PostList";
import CreatePost from "./components/CreatePost/CreatePost";
import posts from "./components/Posts/PostData";

function App() {
  return (
    <div className="App">
      <CreatePost />
      <PostList data={posts} />
    </div>
  );
}

export default App;
