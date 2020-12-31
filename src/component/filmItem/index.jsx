import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import examplePoster from "../../assets/img/examplefilm.png";
import playIcon from "../../assets/img/play-video.png";
import star1 from "../../assets/img/star1.png";
import start12 from "../../assets/img/star1.2.png";
import "./styles.scss";
import { Redirect } from "react-router-dom";
function FilmItem(props) {
  const [isOpen, setOpen] = useState(false);
  const [linkYoutube, setLink] = useState("");
  const [redirect, setRedirect] = useState(false);
  const handleOpenModal = (link) => {
    setLink(link);
    setOpen(true);
  };
  const getIdVideo = (url) => {
    let idVideo;
    let index = url.indexOf("watch");
    if (index !== -1) {
      idVideo = url.slice(index + 8, index + 19);
    } else {
      index = url.indexOf("embed");
      if (index !== -1) {
        idVideo = url.slice(index + 6, index + 17);
      } else {
        index = url.indexOf("youtu.be");
        if (index !== -1) {
          idVideo = url.slice(index + 9, index + 20);
        }
      }
    }
    return idVideo;
  };
  const movie = props.movie;

  const handleOnClick = () => {
    console.log(movie);
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect push to={`/phim/${movie.maPhim}`} />;
  } else {
    return (
      <React.Fragment>
        <div className="film">
          <div className="film__detail">
            <div className="img__film">
              <img src={movie.hinhAnh} alt="film__poster" />
              <div
                className="film__hover"
                onClick={() => {
                  handleOnClick();
                }}
              ></div>
              <button
                className="btn btn__play"
                href="#"
                onClick={() => {
                  handleOpenModal(getIdVideo(movie.trailer));
                }}
              >
                <img src={playIcon} alt="play-btn" />
              </button>
            </div>
            <div className="film__point d-flex flex-column justify-content-center align-items-center">
              <p className="point__number">9.2</p>
              <p className="film__star">
                <img src={star1} alt="star__film" />
                <img src={star1} alt="star__film" />
                <img src={star1} alt="star__film" />
                <img src={star1} alt="star__film" />
                <img src={start12} alt="star__film" />
              </p>
            </div>
          </div>
          <div className="film__info">
            <span className="film__ageType typeP">P</span>
            {movie.tenPhim} (P)
            <p className="film__time">140 phút</p>
          </div>
          <div className="film__button">
            <div
              className="btn button"
              onClick={() => {
                handleOnClick();
              }}
            >
              ĐẶT VÉ
            </div>
          </div>
        </div>
        <div className="block__video">
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={linkYoutube}
            onClose={() => setOpen(false)}
            youtube={{
              autoplay: 1,
              mute: 1,
            }}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default FilmItem;
