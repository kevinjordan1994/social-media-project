// import "./App.css";
import PostList from "./components/PostList";
import profileImage from "./images/dummy_photo.jpg";

function App() {
  const testPostData = [
    {
      profileImage: profileImage,
      profileName: "Sarah Jones",
      postContent: "I like turtles.",
    },
    {
      profileImage: profileImage,
      profileName: "Sarah Jones",
      postContent: "Don't you?",
    },
  ];

  return (
    <div className="App">
      <PostList data={testPostData} />
    </div>
  );
}

export default App;
