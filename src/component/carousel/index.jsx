import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ModalVideo from "react-modal-video";
import poster1 from "../../assets/img/filmPoster/bi-mat-thien-duong-15972163589211-slide1.jpg";
import poster2 from "../../assets/img/filmPoster/ca-sau-15972253022491-slide2.png";
import poster3 from "../../assets/img/filmPoster/bi-mat-cua-gio-sneakshow-16063182906605.jpg";
import playIcon from "../../assets/img/play-video.png";
import "../../../node_modules/react-modal-video/scss/modal-video.scss";
import Dropdown from "react-bootstrap/Dropdown";
import "./styles.scss";
import useStyles from "./styles.js";
import { Redirect } from "react-router-dom";
function CarouselArea() {
  const [isOpen, setOpen] = useState(false);
  const [linkYoutube, setLink] = useState("");
  const [redirect, setRedirect] = useState(false);
  const classes = useStyles();
  const handleOpenModal = (link) => {
    setLink(link);
    setOpen(true);
  };
  const handleOnClick = () => {
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect push to="/phim/123" />;
  } else {
    return (
      <div className={`carouselAndsearch ${classes.carouselAndSearch}`}>
        <div className="CarouselArea">
          <Carousel className=" h-100 w-100" interval={5000}>
            <Carousel.Item className="carousel__item">
              <img
                className="d-block carousel__img w-100 "
                src={poster3}
                alt="First slide"
                onClick={() => {
                  handleOnClick();
                }}
              />
              <a
                className="playIcon"
                onClick={() => {
                  handleOpenModal("L2EodPu-3DY");
                }}
              >
                <img src={playIcon} alt="playIcon" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block carousel__img w-100 "
                src={poster1}
                alt="Third slide"
                onClick={() => {
                  handleOnClick();
                }}
              />
              <a
                className="playIcon"
                onClick={() => {
                  handleOpenModal("5IMIdd3iq6A");
                }}
              >
                <img src={playIcon} alt="playIcon" />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block carousel__img w-100"
                src={poster2}
                alt="Third slide"
                onClick={() => {
                  handleOnClick();
                }}
              />
              <a
                className="playIcon"
                onClick={() => {
                  handleOpenModal("wihfeV6sTfM");
                }}
              >
                <img src={playIcon} alt="playIcon" />
              </a>
            </Carousel.Item>
          </Carousel>
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
        </div>
        <div className="home__search">
          <div className="search__name">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span>Phim</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="search__theater">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span>Rạp</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="search__date">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span>Ngày xem</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="search__time">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                <span>Suất chiếu</span>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="search__booking">
            <button>MUA VÉ NGAY</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CarouselArea;
