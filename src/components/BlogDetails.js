import React from 'react';
import { useParams, useNavigate, } from 'react-router-dom';

const BlogDetails = ({blogs , fetcher}) => {
    const { title } = useParams();
    const navigate = useNavigate();
    const blogDetails = blogs.filter((post) => post.title === title).map((blog) =>          
        <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div className='body'>{blog.body}</div>
            <a href={`CreateBlogs/edit/${blog.id}`}><button>Edit Details</button></a>
            <button onClick={()=>handleDelete(blog)} >Delete</button> 
        </div>
    )  
    const handleDelete = (item) => {
        fetch(`https://calm-newt-belt.cyclic.app/blogs/${item.id}`, {
             method: 'DELETE'
        }).then(() => {
            console.log(item.id)
             navigate('/Home');
             fetcher()
            })
    }
    return (
        < div className='details'>
            <div>
                {blogDetails} 
            </div>
         </div>
    );
};

export default BlogDetails;