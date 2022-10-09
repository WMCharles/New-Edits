import React from 'react';
  import { useParams, useNavigate, } from 'react-router-dom';
//  import BlogList from './BlogList';


const BlogDetails = ({blogs , fetcher}) => {
    // console.log(blogs);
       
        const { id } = useParams();
         const navigate = useNavigate();
        //  console.log(id)
     
         const blogDetail = blogs.map((blog) => {
            // console.log(blog.title)
            
              return <div  key={id} >
   
               <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
               <div className='body'>{blog.body}</div>
                
               </div>
              ; 
            })
        
       
  
 
    const handleDelete = (id) => {
        fetch('https://calm-newt-belt.cyclic.app/blogs/'+ id,{
             method: 'DELETE'
        }).then(() => {
            console.log(id)
             navigate('/Home');
             fetcher()
            })
    }
    return (
        < div className='details'>

         {blogDetail}
         <a href={`CreateBlogs/edit/${id}`}><button>Edit Details</button></a>
         <button onClick={()=>handleDelete(id)} >Delete</button>   
         </div>

        
    );
};

export default BlogDetails;