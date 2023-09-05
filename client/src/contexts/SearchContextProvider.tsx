import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type searchContext = {
  searchInput: string;
  setSearchInput: Dispatch<SetStateAction<string>>;
};

export const SearchContext = createContext<searchContext>({
  searchInput: "",
  setSearchInput: () => {},
});

const SearchContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [searchInput, setSearchInput] = useState<string>("");

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
