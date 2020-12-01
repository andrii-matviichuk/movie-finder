import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompareList from "./CompareList";
import { updateCompareData } from "../actions/compareAction";
import { useEffect } from "react";

function CompareContainer() {
  const dispatch = useDispatch();
  const [isOnDrag, setIsOnDrag] = useState(false);

  // eslint-disable-next-line
  useEffect(() => dispatch(updateCompareData([])), []);
  const movieIds = useSelector((state) => state.compare.movieIds);
  const droppedMovieId = useSelector(
    (state) => state.compare.currentMovieDragId
  );

  //Handlers
  const onDropHandler = (e) => {
    setIsOnDrag(false);
    movieIds.push(droppedMovieId);
    dispatch(updateCompareData(movieIds));
  };

  const onDragEnterHandelr = (e) => {
    e.preventDefault();
    setIsOnDrag(true);
  };
  const onDragLeaveHandelr = (e) => {
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
      <CompareList />
    </div>
  );
}

export default CompareContainer;
