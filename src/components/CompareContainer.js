import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CompareList from "./CompareList";
import Movie from "./Movie";
import { updateCompareData } from "../actions/compareAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleUp,
  faStar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

function CompareContainer() {
  const dispatch = useDispatch();
  const [isOnDrag, setIsOnDrag] = useState();
  const [dragCounter, setDragCounter] = useState(0);

  const bestCastData = useSelector((state) => state.compare.bestCast);
  const [bestCast, setBestCast] = useState(bestCastData);

  useEffect(() => {
    if (dragCounter === 0) setIsOnDrag(false);
    setBestCast(bestCastData);
  }, [dragCounter, bestCastData]);

  const movieIdsData = useSelector((state) => state.compare.movieIds);
  const droppedMovieId = useSelector(
    (state) => state.compare.currentMovieDragId
  );

  const [movieIds, setMovieIds] = useState(movieIdsData);

  //Handlers
  const onDropHandler = (e) => {
    setIsOnDrag(false);
    setDragCounter(0);
    if (!movieIdsData.includes(droppedMovieId))
      movieIdsData.push(droppedMovieId);
    dispatch(updateCompareData(movieIdsData));
    setMovieIds(movieIdsData);
    setBestCast(bestCastData);
  };

  const onDragEnterHandelr = (e) => {
    e.preventDefault();
    setDragCounter(dragCounter + 1);
    setIsOnDrag(true);
  };
  const onDragLeaveHandelr = (e) => {
    setDragCounter(dragCounter - 1);
  };
  return (
    <div
      className={isOnDrag ? "compare-container hovered" : "compare-container"}
      onDragEnter={onDragEnterHandelr}
      onDragLeave={onDragLeaveHandelr}
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDropHandler}
    >
      <div className="compare-info">
        <div className="best-section best-movie">
          <div className="header">
            <FontAwesomeIcon className="star-icon" icon={faStar} />
            <h3>Best Movie</h3>
            <FontAwesomeIcon className="star-icon" icon={faStar} />
          </div>
        </div>
        <div className="best-section best-cast">
          <div className="header">
            <FontAwesomeIcon className="users-icon" icon={faUsers} />
            <h3>Best Cast</h3>
            <FontAwesomeIcon className="users-icon" icon={faUsers} />
          </div>
          {bestCast >= 0 ? <Movie size="small" id={bestCast} /> : ""}
        </div>
      </div>
      <CompareList movieIds={movieIds} />
      <div className="drop-placeholder">
        <h3>Drop movie here</h3>
        <FontAwesomeIcon
          className="circle-up-icon"
          icon={faChevronCircleUp}
          size="5x"
        />
      </div>
    </div>
  );
}

export default CompareContainer;
