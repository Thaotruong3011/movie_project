import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./styles.scss";
import ModalVideo from "react-modal-video";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import star from "../../assets/img/star1.png";
import star12 from "../../assets/img/star1.2.png";
import star1 from "../../assets/img/star1.png";
import start12 from "../../assets/img/star1.2.png";
import imgReviewer from "../../assets/img/photo.png";
import playIcon from "../../assets/img/play-video.png";
import { useParams } from "react-router-dom";
import { getMovieDetailRequest } from "../../redux/actions/movie.actions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-scroll";
import Loading from "../loading";
import MovieDetailShowTime from "../movie-detail-showtime";
function MovieDetail() {
  const params = useParams();
  const movieCode = params.movieCode;
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);
  const movie = useSelector((state) => state.movie.movieInfo);
  const isLoading = useSelector((state) => state.common.isLoading);
  const date = new Date(movie?.ngayKhoiChieu);
  useEffect(() => {
    if (movieCode) {
      dispatch(getMovieDetailRequest(movieCode));
    }
  }, []);
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
  const handleOpenModal = () => {
    setOpen(true);
  };
  if (isLoading) {
    return (
      <div className="movieDetail ">
        <Loading />
      </div>
    );
  } else {
    if (movie) {
      return (
        <div className="movieDetail ">
          <div className="main__top py-5">
            <div className="detail__content py-5">
              <Row>
                <Col xs={3} className="filmPosterTop">
                  {/* <img src={movie?.hinhAnh} alt="imgdetail" /> */}
                  <div className="film__detail">
                    <div className="img__film">
                      <img src={movie.hinhAnh} alt="film__poster" />
                      <div className="film__hover"></div>
                      <button
                        className="btn btn__play"
                        href="#"
                        onClick={() => {
                          handleOpenModal();
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
                </Col>
                <Col
                  xs={6}
                  className="filmNameTop d-flex flex-column justify-content-center"
                >
                  <span>
                    {date.getDate()}.{date.getMonth()}.{date.getFullYear()}
                  </span>
                  <p>
                    <span className="typeP film__ageType">P</span>
                    {movie?.tenPhim}
                  </p>
                  <span>95 phút - 0 IMDb - 2D/Digital</span>
                  <div className="btn__booking">
                    <button className="btn">
                      <Link
                        activeClass="active"
                        to="detail__content"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        Đặt vé
                      </Link>
                    </button>
                  </div>
                </Col>
                <Col
                  xs={3}
                  className="filmPoint d-flex flex-column justify-content-center"
                >
                  <div className="circle__point">
                    <CircularProgressbar
                      value={movie.danhGia * 10}
                      text={movie.danhGia}
                    />
                  </div>
                  <div className="film__star py-3">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star12} alt="star12" />
                  </div>
                  <div className="comment">
                    <p>
                      <span>25</span> người đánh giá
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="background__img">
              <img
                src={movie?.hinhAnh}
                alt="background"
                className="backgroundImg"
              />
            </div>
          </div>
          <div className="main__info pt-2">
            <div className="detail__content" id="detail__content">
              <Tabs defaultActiveKey="lichChieu" id="uncontrolled-tab-example">
                <Tab
                  eventKey="lichChieu"
                  title="Lịch Chiếu"
                  className="tabpane-LichChieu"
                >
                  <MovieDetailShowTime />
                </Tab>
                <Tab eventKey="thongTin" title="Thông Tin">
                  <Row>
                    <Col xs={6}>
                      <Row>
                        <Col xs={6}>Ngày công chiếu</Col>
                        <Col xs={6}>
                          {date.getDate()}.{date.getMonth()}.
                          {date.getFullYear()}
                        </Col>
                        <Col xs={6}>Đạo diễn</Col>
                        <Col xs={6}>Joel Crawford</Col>
                        <Col xs={6}>Diễn viên</Col>
                        <Col xs={6}>
                          Kelly Marie Tran, Cloris Leachman, Catherine Keener,
                          Ryan Reynolds, Emma Stone, Nicolas Cage
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={6}>
                      <p>Nội dung</p>
                      <p>{movie.moTa}</p>
                    </Col>
                  </Row>
                </Tab>
                <Tab
                  eventKey="danhGia"
                  title="Đánh Giá"
                  className="tabpane-DanhGia"
                >
                  <Row>
                    <Col
                      xs={12}
                      className="d-flex blockReview justify-content-around align-items-center"
                    >
                      <img
                        src={imgReviewer}
                        alt="imgReviewer"
                        className="imgReviewer"
                      />
                      <p className="reviewText">Bạn nghĩ gì về phim này?</p>
                      <p className="starReview">
                        <img src={star} alt="starReview" />
                        <img src={star} alt="starReview" />
                        <img src={star} alt="starReview" />
                        <img src={star} alt="starReview" />
                        <img src={star} alt="starReview" />
                      </p>
                    </Col>
                  </Row>
                </Tab>
              </Tabs>
            </div>
          </div>
          <div className="block__video">
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId={getIdVideo(movie?.trailer)}
              onClose={() => setOpen(false)}
              youtube={{
                autoplay: 1,
                mute: 1,
              }}
            />
          </div>
        </div>
      );
    } else {
      return (
        <div className="movieDetail ">
          <Loading />
        </div>
      );
    }
  }
}

export default MovieDetail;
