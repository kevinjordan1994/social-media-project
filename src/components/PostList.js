import Post from "./Post";
import "./PostList.css";

function PostList(props) {
  return (
    <div className="post-list">
      {props.data.map((post) => (
        <Post data={post} />
      ))}
    </div>
  );
}

export default PostList;
