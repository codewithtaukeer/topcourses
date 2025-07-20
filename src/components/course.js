import "./course.css";
import { BsHeart, BsHeartFill } from "react-icons/bs"; // Bootstrap
import { useState } from "react";
import { toast } from "react-toastify";

function Course(props) {
  const courseData = props.data;
  const [liked, setlike] = useState(false);
  function handler() {
    setlike(!liked);
    if (!liked) {
      toast.success("Liked Successfully");
    } else {
      toast.warn("Like Removed");
    }
  }
  console.log(courseData.image.url);
  return (
    <div className="Card d-flex flex-column justify-content-center align-items-center">
      <div className="image-container">
        <img
          className="image"
          src={courseData.image.url}
          alt={courseData.image.alt}
        ></img>
        <span className="heart-icon" onClick={handler}>
          {liked ? <BsHeartFill color="red" /> : <BsHeart />}
        </span>
      </div>

      <div>
        <h6 className="title">{courseData.title}</h6>
        <div className="description">{courseData.description}</div>
      </div>
    </div>
  );
}
export default Course;
