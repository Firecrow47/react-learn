import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import { PostService } from "../API/PostsService";
import MyLoader from "../components/UI/Loader/MyLoader";

function PostPage() {
   const params = useParams();
   const [post, setPost] = useState({});
   const [comments, setComments] = useState([]);
   const [fetchPostById, isLoading, error] = useFetching(async (id)=>{
    const response = await PostService.getById(id);
    setPost(response.data);
   })

   const [fetchCommentsById, isComLoading, ComError] = useFetching(async (id)=>{
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
   })
   useEffect(()=>{
    fetchPostById(params.id)
    fetchCommentsById(params.id)
   },[])
    
  return (
    <div>
        <h1>Ты открыл пост с ID = {params.id}</h1>
        {isLoading 
        ? <MyLoader />
        :<div>{post.id}.{post.title}</div>
        }
        <h1>
            Комментарии
        </h1>
        {isComLoading
            ? <MyLoader />
            : <div>
                {comments.map(comm=> 
                  <div key={comm.id} style={{marginTop:15}}>
                    <h4>{comm.email}</h4>
                    <div>{comm.body}</div>
                  </div>  
                )}
            </div>
        }
    </div>

  );
}

export default PostPage;