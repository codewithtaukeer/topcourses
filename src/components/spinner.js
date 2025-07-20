import "./spinner.css";

function Spinner() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <h1 text-center>Loading...</h1>
      <div className="spinner"></div>
    </div>
  );
}

export default Spinner;
