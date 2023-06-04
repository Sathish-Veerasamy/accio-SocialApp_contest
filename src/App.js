import { Routes,Route } from "react-router-dom";
import PostPage from "./components/PostPage";
import PostDetails from "./components/PostDetails";

function App() {
  
  return (
    <div className="App">
      div
      <p className="header">Social Media App</p>
      <hr></hr>
      <Routes>
        <Route path="/" element={<PostPage />} />
        <Route path="/item/:id" element={<PostDetails />} />
      </Routes>
    </div>
  );
}

export default App;
