import modules from "./Header.module.css";

const Header = ({ onCaptureInput, searchInput }) => {
  const date = new Date();
  const dateOfMonth = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const inputChangeHandler = (e) => {
    onCaptureInput(e.target.value);
  };

  return (
    <div className={modules.header}>
      <div className={modules.dateBox}>
        <p>{`${dateOfMonth} - ${month} - ${year}`}</p>
      </div>

      <h2 className={modules.heading}>SEATING ARRANGEMENT</h2>

      <div className={modules.searchInput}>
        <label>Search Your Name</label>
        <input value={searchInput} onChange={inputChangeHandler} type="text" />
      </div>
    </div>
  );
};

export default Header;
