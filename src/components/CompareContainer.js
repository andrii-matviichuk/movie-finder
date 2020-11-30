import { useState } from "react";
import { useDispatch } from "react-redux";
import CompareList from "./CompareList";
import { updateCompareData } from "../actions/compareAction";
import { useEffect } from "react";

function CompareContainer() {
  const dispatch = useDispatch();
  const [isOnDrag, setIsOnDrag] = useState(false);

  // eslint-disable-next-line
  useEffect(() => dispatch(updateCompareData([])), []);

  //Handlers
  const onDropHandler = (e) => {
    e.preventDefault();
    console.log(e);
  };

  const onDragOverHandler = (e) => e.preventDefault();

  const onDragEnterHandelr = (e) => {
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
      onDrop={onDropHandler}
      onDragOver={onDragOverHandler}
    >
      <h1>CompareList</h1>
      <CompareList />
    </div>
  );
}

export default CompareContainer;
