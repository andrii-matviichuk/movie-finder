import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompareList from "./CompareList";
import { updateCompareData } from "../actions/compareAction";

function CompareContainer() {
  const dispatch = useDispatch();
  const [isOnDrag, setIsOnDrag] = useState();

  const movieIdsData = useSelector((state) => state.compare.movieIds);
  const droppedMovieId = useSelector(
    (state) => state.compare.currentMovieDragId
  );

  const [movieIds, setMovieIds] = useState(movieIdsData);

  //Handlers
  const onDropHandler = (e) => {
    setIsOnDrag(false);
    if (!movieIdsData.includes(droppedMovieId))
      movieIdsData.push(droppedMovieId);
    dispatch(updateCompareData(movieIdsData));
    setMovieIds(movieIdsData);
  };

  const onDragEnterHandelr = (e) => {
    e.preventDefault();
    setIsOnDrag(true);
  };
  const onDragLeaveHandelr = (e) => {
    e.preventDefault();
    setIsOnDrag(false);
  };
  return (
    <div
      className={isOnDrag ? "compare-container hovered" : "compare-container"}
      onDragEnter={onDragEnterHandelr}
      onDragLeave={onDragLeaveHandelr}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDropHandler}
    >
      <h1>CompareList</h1>
      <CompareList movieIds={movieIds} />
    </div>
  );
}

export default CompareContainer;
