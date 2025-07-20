import "./courses.css";
import Course from "./course";
import { useEffect, useState } from "react";
import Spinner from "./spinner.js";

function Courses(props) {
  const url = props.apiUrl;
  const [courses, setCourses] = useState(null);

  const selectedCategory = props.category;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setCourses(data.data);
      } catch (error) {
        console.error("Data fetch failed");
      }
    }

    fetchData();
  }, [props.apiUrl]);

  if (!courses) {
    return <Spinner></Spinner>;
  }

  // Filtering logic
  // const filteredCourses =
  // selectedCategory === "All"
  // ? Object.values(courses).flat()
  //: courses[selectedCategory] || [];

  let filteredCourses = [];

  if (selectedCategory === "All") {
    const allCoursesArrays = Object.values(courses); // Array of arrays
    filteredCourses = allCoursesArrays.flat(); // Flatten into one array
  } else {
    filteredCourses = courses[selectedCategory] || []; // Use specific category or empty array
  }

  return (
    <div className="Courses d-flex justify-content-center align-items-center">
      {filteredCourses.map((data, index) => (
        <Course key={index} data={data}></Course>
      ))}
    </div>
  );
}
export default Courses;
