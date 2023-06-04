import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const PostDetails = () => {
  const { id } = useParams();
  let data = useSelector((state) => state.data);
  data = data.filter((post) => {
    return post.id == id;
  });

  var image = `https://picsum.photos/200?random=${id}`;
  return (
    <div className="postDetailContainer">
      <h1>Details Page For Post With ID {id}</h1>
      <br></br>

      <img src={image} alt="current" className="detailImage" />
      <div className="details">
        <p>User Id: {data[0].userId}</p>
        <p>Title:{data[0].title}</p>
        <p>Body: {data[0].body}</p>
      </div>
    </div>
  );
};

export default PostDetails;
