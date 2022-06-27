import React, {
  createContext,
  FC,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import { AlbumData } from "../types/AlbumData";
import { useAlbumListContext } from "./AlbumListContext";

interface FavoriteAlbumListContextProps {
  children: React.ReactNode;
}

interface ContextData {
  favoriteAlbumList: AlbumData[];
  onSetFavorite: (id: string) => void;
  loading: boolean;
}

const FavoriteAlbumListContext = createContext<ContextData>({
  favoriteAlbumList: [],
  onSetFavorite: (id: string) => {},
  loading: true,
});

export const FavoriteAlbumListProvider: FC<FavoriteAlbumListContextProps> = ({
  children,
}) => {
  const { albumList } = useAlbumListContext();

  const [state, setState] = useState<ContextData>({
    favoriteAlbumList: [],
    loading: true,
    onSetFavorite: () => {},
  });

  const selectFavorite = useCallback(
    (id: string) => {
      const index = state.favoriteAlbumList.findIndex(
        (album) => album.id === id,
      );
      if (index >= 0) {
        const updatedList = [...state.favoriteAlbumList];
        updatedList.splice(index, 1);
        setState((prevState) => ({
          ...prevState,
          favoriteAlbumList: updatedList,
        }));
      } else {
        const newAlbum = albumList.find((album) => album.id === id);
        newAlbum &&
          setState((prevState) => ({
            ...prevState,
            favoriteAlbumList: [...prevState.favoriteAlbumList, newAlbum],
          }));
      }
    },
    [albumList, state.favoriteAlbumList],
  );

  useEffect(() => {
    setState((prevState) => ({
      ...prevState,
      onSetFavorite: selectFavorite,
    }));
  }, [selectFavorite]);

  return (
    <FavoriteAlbumListContext.Provider value={state}>
      {children}
    </FavoriteAlbumListContext.Provider>
  );
};

export const useFavoriteAlbumListContext = () => {
  const store = useContext(FavoriteAlbumListContext);
  return store;
};
