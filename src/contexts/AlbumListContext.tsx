import React, {
  createContext,
  FC,
  useContext,
  useState,
  useEffect,
} from "react";
import { albumDataConverter } from "../converters/AlbumDataConverter";
import { AlbumData } from "../types/AlbumData";

const URL = "https://itunes.apple.com/us/rss/topalbums/limit=100/json";

interface AlbumListContextProps {
  children: React.ReactNode;
}

interface ContextData {
  albumList: AlbumData[];
  categoryList: string[];
  loading: boolean;
}

const AlbumListContext = createContext<ContextData>({
  albumList: [],
  categoryList: [],
  loading: true,
});

export const AlbumListProvider: FC<AlbumListContextProps> = ({ children }) => {
  const [state, setState] = useState<ContextData>({
    albumList: [],
    categoryList: [],
    loading: true,
  });

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) =>
        setState({
          albumList: albumDataConverter(data),
          categoryList: [],
          loading: false,
        }),
      )
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const result: string[] = [];
    state.albumList.forEach((album) => {
      if (!result.includes(album.category)) {
        result.push(album.category);
      }
    });
    setState((prevState) => ({
      ...prevState,
      categoryList: result.sort((a, b) => a.localeCompare(b)),
    }));
  }, [state.albumList]);

  return (
    <AlbumListContext.Provider value={state}>
      {children}
    </AlbumListContext.Provider>
  );
};

export const useAlbumListContext = () => {
  const store = useContext(AlbumListContext);
  return store;
};
