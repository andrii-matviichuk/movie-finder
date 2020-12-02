import { useSelector } from "react-redux";
import { getImgURL } from "../api";
import noImage from "../img/no-image.png";

function Actor({ id }) {
  const actorData = useSelector((state) => state.movie.movieCast.cast).find(
    (actor) => actor.id === id
  );
  return (
    <div className="actor">
      <h4>{actorData.original_name}</h4>
      <h5>{actorData.character}</h5>
      <img
        src={
          actorData.profile_path
            ? getImgURL(actorData.profile_path, "w200")
            : noImage
        }
        alt=""
      />
    </div>
  );
}

export default Actor;
