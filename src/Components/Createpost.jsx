import { useContext, useRef } from "react";
import { PostList } from "../Store/Post-List-Provider";

const Createpost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const posttitleElement = useRef();
  const postcontentElement = useRef();
  const reactionsElement = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const posttitle = posttitleElement.current.value;
    const postcontent = postcontentElement.current.value;
    const reactions = reactionsElement.current.value;

    userIdElement.current.value="";
    posttitleElement.current.value="";
    postcontentElement.current.value="";
    reactionsElement.current.value="";

    fetch('https://dummyjson.com/posts/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title:posttitle,
        body:postcontent,
        userId:userId,
        reaction:reactions,
      })
    })
    .then(res => res.json())
    .then((post)=>addPost(post));
  };

  return (
    <form className="createpost" onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="userid" className="form-label">
          UserId
        </label>
        <br />
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          style={{ width: "80%" }}
          id="userid"
          placeholder="Enter your user name..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <br />
        <input
          ref={posttitleElement}
          type="text"
          className="form-control"
          style={{ width: "80%" }}
          id="title"
          placeholder="How you are feeling today..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <br />
        <textarea
          ref={postcontentElement}
          rows="4"
          type="text"
          className="form-control"
          style={{ width: "80%" }}
          id="body"
          placeholder="Tell us more about it..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of reactions
        </label>
        <br />
        <input
          ref={reactionsElement}
          type="text"
          className="form-control"
          style={{ width: "80%" }}
          id="reaction"
          placeholder="how many people reacted to this post..."
        />
      </div>
      <button type="submit" className="btn btn-primary" >
        Post
      </button>
    </form>
  );
};
export default Createpost;
