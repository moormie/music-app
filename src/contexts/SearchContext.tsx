import { FC, useState, createContext, useContext } from "react";

interface SearchContextProps {
  children: React.ReactNode;
}

interface ContextData {
  searchedValue: string;
  searchHandler: (item: string) => void;
  orderValue: string | null;
  orderHandler: (order: string | null) => void;
}

export const SearchContext = createContext<ContextData>({
  searchedValue: "",
  searchHandler: () => {},
  orderValue: "",
  orderHandler: () => {},
});

export const SearchContextProvider: FC<SearchContextProps> = ({ children }) => {
  const [state, setState] = useState<ContextData>({
    searchedValue: "",
    searchHandler: (value: string) => {
      setState((prevState) => ({
        ...prevState,
        searchedValue: value,
      }));
    },
    orderValue: "artist",
    orderHandler: (value: string | null) => {
      setState((prevState) => ({
        ...prevState,
        orderValue: value,
      }));
    },
  });

  return (
    <SearchContext.Provider value={state}>{children}</SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  const store = useContext(SearchContext);
  return store;
};
