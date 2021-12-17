import { Link } from 'react-router-dom';

const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Author- {blog.author}</p>
						<Link to={`/edit/${blog.id}`}>
						<buttoni className="edit-preview">Edit</buttoni>
                    </Link>
                    </Link>

                   
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;