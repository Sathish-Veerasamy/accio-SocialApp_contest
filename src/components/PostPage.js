import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/actions/apiActions";
import { useEffect } from "react";
import "./../index.css";
import Posts from "./Posts";
import { useNavigate } from "react-router-dom";

const PostPage = () => {
  
  const dispatch = useDispatch();
  let loading = useSelector((state) => state.loa);
  let data = useSelector((state) => state.data);
  

  useEffect(() => {
    dispatch(fetchData());
  },[]);

 return(
     <div>
       {loading ? <h1>Loading.....</h1>:(
        <div className="postsContainer">
            {data.map((post)=>{
                return(
                    <Posts post={post} />
                )
            })}
        </div>
       )}
     </div>
    )
};

export default PostPage;
