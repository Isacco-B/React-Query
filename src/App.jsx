import { useState } from "react";
import PostList1 from "./PostList1";
import PostList2 from "./PostList2";

export default function App() {
  const [currentPage, setCurrentPage] = useState(<PostList1/>)
  return (
    <div>
      <button onClick={() => setCurrentPage(<PostList1 />)}>Post List 1</button>
      <button onClick={() => setCurrentPage(<PostList2 />)}>Post List 2</button>
      <br />
      {currentPage}
    </div>
  );
}
