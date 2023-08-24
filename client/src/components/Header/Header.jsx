const Header = ({ onCaptureInput, searchInput }) => {
  const date = new Date();
  const dateOfMonth = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const inputChangeHandler = (e) => {
    onCaptureInput(e.target.value);
  };

  return (
    <div className="min-w-[100vw] w-full flex flex-col items-center gap-4 p-4 self-center text-center fixed bg-stone-800">
      <h2 className="text-4xl  md:text-5xl text-purple-500 font-bold p-4 bg-white rounded-sm  border-2 ">
        SEATING ARRANGEMENT
      </h2>
      <div className="text-white text-xl font-bold">
        <p>{`${dateOfMonth} - ${month} - ${year}`}</p>
      </div>
      <div className="w-full flex flex-col text-center gap-8 p-4">
        <input
          value={searchInput}
          onChange={inputChangeHandler}
          type="text"
          className="rounded-md p-4 text-lg border-2 border-black"
          placeholder="search your name"
        />
      </div>
    </div>
  );
};

export default Header;
