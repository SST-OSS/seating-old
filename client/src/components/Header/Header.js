import React from "react";
import modules from "./Header.module.css";

const Header = () => {
  const date = new Date();
  const dateOfMonth = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  return (
    <div className={modules.header}>
      <div className={modules.dateBox}>
        <p>{`${dateOfMonth} - ${month} - ${year}`}</p>
      </div>

      <h2 className={modules.heading}>SEATING ARRANGEMENT</h2>

      <div className={modules.searchInput}>
        <label>Search Your Name</label>
        <input type="text" />
      </div>
    </div>
  );
};

export default Header;
