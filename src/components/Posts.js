import React from "react";
import "./../index.css";
import { Link } from "react-router-dom";


const Posts = ({ post }) => {
  
  var image = `https://picsum.photos/200?random=${post.id}`;
  var title = post.title.slice(0, 15) + ".....";
  var body = post.body.slice(0, 35) + "....";
  return (
    <Link to={`/item/${post.id}`}>
      <div className="card">
        <div className="card-content">
          <img src={image} alt="this" style={{ width: "100%" }} />
          <div className="card-text">
            <p>USER ID:{post.userId}</p>
            <p>Title:{title}</p>
            <p>Body:{body}</p>
            Read more....
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Posts;
