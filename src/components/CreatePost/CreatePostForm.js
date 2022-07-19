import "./CreatePostForm.css";

function CreatePostForm() {
  return (
    <div className="create-post">
      <form className="form">
        <label className="create-post__label">Post Away!</label>
        <textarea className="create-post__text-area" cols="20" rows="5" />
      </form>
    </div>
  );
}

export default CreatePostForm;
