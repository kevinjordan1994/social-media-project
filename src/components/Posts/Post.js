// import profileImage from "../images/dummy_photo.jpg";
import "./Post.css";

function Post(props) {
  const date = new Date();
  const dateOfPost = date.toDateString().slice(4);
  const timeOfPost = `${date.getHours()}:${
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
  }, `;
  const formattedDate = timeOfPost + dateOfPost;

  return (
    <div className="post">
      <div className="header">
        <img
          className="profile-image"
          src={props.data.image}
          alt={props.data.name}
        ></img>
        <h1 className="profile-name">{props.data.profileName}</h1>
      </div>
      <p className="content">{props.data.content}</p>
      <div className="footer">
        <p className="date">{formattedDate}</p>
      </div>
    </div>
  );
}

export default Post;
