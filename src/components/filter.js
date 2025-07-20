import "./filter.css";
function Filter(props) {
  const filterData = props.filterData;
  const setCategory = props.setCategory;

  return (
    <div className="filter-buttons">
      {filterData.map((data, index) => (
        <button
          onClick={() => setCategory(data.title)}
          className="btn btn-primary m-2"
        >
          {data.title}
        </button>
      ))}
    </div>
  );
}
export default Filter;
