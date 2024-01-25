import { useParams } from "react-router-dom";
import { categories } from "../../components/sidebar/categories";
import { useGetSelectionByIdQuery } from "../services/skymusic";

import * as S from "./tracsStyle";
import { useDispatch } from "react-redux";

import { useEffect } from "react";
import { setCurrentPage } from "../store/actions/creators/skymusic";

export const CategoriesOfHits = ({ setTitle, searchText }) => {
  const dispatch = useDispatch();
  const params = useParams();
  const selectionId = parseInt(params.id);
  const category = categories.find((category) => category.id === selectionId);

  useEffect(() => {
    if (category) {
      setTitle(category.selection_title);
    }
    dispatch(setCurrentPage({ setCurrentPage: "Category" }));
  }, [category]);

  const { data, error, isLoading } = useGetSelectionByIdQuery({
    id: selectionId,
  });

  const isEmptyList = !isLoading && (!data || data.length === 0);
  if (isEmptyList) {
    return <p>Ваш плейлист пока пуст</p>;
  }

  if (isLoading) {
    return <S.ErrorText>Загрузка...</S.ErrorText>;
  }

  return (
    <TrackListComponent
      searchText={searchText}
      isVisiable={true}
      trackList={data.items}
      error={error}
      isLoading={isLoading}
      isAllTracksLiked={false}
    />
  );
};
