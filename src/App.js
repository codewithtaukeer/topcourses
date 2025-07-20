import "./App.css";
import Navbar from "./components/Navbar";

import Filter from "./components/filter.js";
import Courses from "./components/courses.js";
import { filterData } from "./data.js";
import { apiUrl } from "./data.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react"; // Add this

function App() {
  const [category, setCategory] = useState("All");
  return (
    <div className="App">
      <div>
        <Navbar> </Navbar>
      </div>
      <div>
        <Filter filterData={filterData} setCategory={setCategory}></Filter>
      </div>
      <div className="coursebox d-flex justify-content-center align-items-center">
        <Courses apiUrl={apiUrl} category={category}></Courses>
      </div>

      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
