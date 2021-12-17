
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const  Create = () => {

  
const [isPending,setIsPending]=useState(false);
    const { id } = useParams();
	const { data: blog, error } =  useFetch('http://localhost:8000/blogs/' + id);
	const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
	console.log(blog.title);
   
  const history = useNavigate();
  const takemeBack = (e) => {
    e.preventDefault();
    history("../", { replace: true });
  };
  const  handleSubmit =async (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIsPending(true);

   await fetch(`http://localhost:8000/blogs/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      setIsPending(false);
      history("../", { replace: true });
    });
  };

  return (
    <div className="create">
      <h2>Edit </h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
		
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Content</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Author</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {!isPending && <button>Edit</button>}
        {!isPending && <button onSubmit={takemeBack}> Cancel</button>}
        {isPending && <button disabled>Editing a Blog</button>}
      </form>
    </div>
  );
};

export default Create;
