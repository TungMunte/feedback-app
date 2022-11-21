import React from "react";
import {
  useParams,
  Navigate,
  useNavigate,
  Routes,
  Route,
} from "react-router-dom";

function Post() {
  //   const params = useParams();
  const status = 200;

  if (status === 404) {
    <Navigate to="/notfound" />;
  }

  const navigate = useNavigate();

  const onClick = () => {
    navigate("/about");
  };

  return (
    <div>
      {/* <h1>Post {params.id}</h1>
      <p>Name : {params.name}</p> */}
      <h1>Post</h1>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello Word</h1>} />
      </Routes>
    </div>
  );
}

export default Post;
