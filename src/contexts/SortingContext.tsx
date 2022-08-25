import { FC, useState, createContext, useContext } from "react";

interface SortingContextProps {
  children: React.ReactNode;
}

interface ContextData {
  orderValue: string | null;
  orderHandler: (order: string | null) => void;
}

export const SortingContext = createContext<ContextData>({
  orderValue: "",
  orderHandler: () => {},
});

export const SortingContextProvider: FC<SortingContextProps> = ({
  children,
}) => {
  const [state, setState] = useState<ContextData>({
    orderValue: "artist",
    orderHandler: (value: string | null) => {
      setState((prevState) => ({
        ...prevState,
        orderValue: value,
      }));
    },
  });

  return (
    <SortingContext.Provider value={state}>{children}</SortingContext.Provider>
  );
};

export const useSortingContext = () => {
  const store = useContext(SortingContext);
  return store;
};
