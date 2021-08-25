import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';
import { useFetching } from '../Hooks/useFetching';


function ProductIdPage(props) {
    const params=useParams();
    const [post,setPost]=useState({})
    const [comments,setComments]=useState([])
    const [fetchPostById,isLoading,error]=useFetching(async (id)=>{
        const response=await PostService.getById(id)
        setPost(response.data)
    })
    const [fetchComments,isComLoading,comError]=useFetching(async (id)=>{
        const response=await PostService.getCommentsByPostId(id)
        setComments(response.data)
    })

    useEffect(()=>{
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])
    
    return (
        <div>
           <h1>Page of Post ID {params.id}</h1> 
           {isLoading
           ?<Loader/>
           :<div>id{post.id} postTitle{post.title}</div>
           } 
           {isComLoading
           ?<Loader/>
           :<div>{comments.map(com=>
            <div key={com.id} style={{marginTop:'15px'}}>
                <h5>{com.email}</h5>
                <div>{com.body}</div>
            </div>
            )}</div>
           }

           
        </div>
    );
}

export default ProductIdPage;