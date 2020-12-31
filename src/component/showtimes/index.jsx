import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import imgbg from "../../assets/img/back-news.png";
import Nav from "react-bootstrap/Nav";
import Tab from "react-bootstrap/Tab";
import exampleImgTheater from "../../assets/img/exampleImgTheater.jpg";
import Collapse from "react-bootstrap/Collapse";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getTheaterListRequest,
  getMovieShowtimesByTheater,
} from "../../redux/actions/cinema.actions";
import { Redirect } from "react-router-dom";
function ShowTime() {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const cinemaList = useSelector((state) => state.cinema.cinemaList);
  const theaterList = useSelector((state) => state.cinema.theaterListSelected);
  const [redirect, setRedirect] = useState(false);
  const [params, setParams] = useState("");
  const movieShowtimes = useSelector(
    (state) => state.cinema.movieShowtimeByTheater
  );
  const [active, setActive] = useState("");
  const renderCinemaList = () => {
    return cinemaList?.map((cinema, key) => {
      return (
        <Nav.Item key={key}>
          <Nav.Link
            eventKey={cinema.maHeThongRap}
            onClick={() => {
              handleActiveTab(cinema.maHeThongRap);
            }}
          >
            <img src={cinema.logo} alt="brand__theater" />
          </Nav.Link>
        </Nav.Item>
      );
    });
  };
  const handleActiveTab = (maHeThongRap) => {
    dispatch(getTheaterListRequest(maHeThongRap));
  };
  const toggle = (maCumRap, maHeThongRap) => {
    const clicked = maCumRap;
    if (active === clicked) {
      // this.setState({active: ''});
    } else {
      setActive(clicked);
    }
    dispatch(getMovieShowtimesByTheater(maHeThongRap, maCumRap));
  };
  const renderTheaterList = (maHeThongRap) => {
    return theaterList?.map((theater, key) => {
      // setActive(theater.maCumRap);
      return (
        <div
          className={`theater__item d-flex align-items-center justify-content-start ${
            active === theater.maCumRap ? "active" : " "
          }`}
          id={key}
          onClick={() => toggle(theater.maCumRap, maHeThongRap)}
          key={key}
        >
          <img src={exampleImgTheater} alt="theater" />
          <div className="wrap__info">
            <span className="brand_name">
              {theater.tenCumRap.indexOf("BHD") !== -1
                ? theater.tenCumRap.slice(
                    0,
                    theater.tenCumRap.indexOf(" ") + 14
                  )
                : theater.tenCumRap.slice(0, theater.tenCumRap.indexOf(" "))}
            </span>
            {theater.tenCumRap.indexOf("BHD") !== -1
              ? theater.tenCumRap.slice(theater.tenCumRap.indexOf(" ") + 14)
              : theater.tenCumRap.slice(theater.tenCumRap.indexOf(" "))}
            <div className="theater__adress">{theater.diaChi}</div>
            <a href="#">[chi tiết]</a>
          </div>
        </div>
      );
    });
  };
  const renderTabPane = () => {
    return cinemaList?.map((cinema, key) => {
      return (
        <Tab.Pane className="w-100" eventKey={cinema.maHeThongRap} key={key}>
          {renderTheaterList(cinema.maHeThongRap)}
        </Tab.Pane>
      );
    });
  };
  const renderMovieShowtimes = () => {
    if (movieShowtimes?.length !== 0) {
      return movieShowtimes?.map((movie, key) => {
        return (
          <div className="time__film m-3 pb-3" key={key}>
            <div
              className="movieInfo  d-flex"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <img src={movie.hinhAnh} alt="miniMovie" />
              <div className="movie__title ml-3 ">
                <span className="ageType">C16</span>
                <span>{movie.tenPhim}</span>
                <br />
                <span className="movie__length">
                  140 phút - TIX 7.4 - IMDb 0
                </span>
              </div>
            </div>
            <Collapse in={open}>
              <div className="movie__showtimes" id="example-collapse-text">
                <span>2D Digital</span>
                <div className="listTimeDetail row ">
                  {renderTimeDetail(movie.result)}
                </div>
              </div>
            </Collapse>
          </div>
        );
      });
    } else {
      return (
        <div className="m-3 pb-3">
          <h5 className="lead">
            Cụm rạp không có suất chiếu. Vui lòng chọn cụm rạp khác trong hệ
            thống.
          </h5>
        </div>
      );
    }
  };
  const handleOnClick = (maLichChieu) => {
    setRedirect(true);
    setParams(maLichChieu);
  };
  const renderTimeDetail = (listTime) => {
    return listTime.map((time, key) => {
      const date = new Date(time.ngayChieuGioChieu);
      const dateEnd = new Date(date.getTime() + 100 * 60000);
      let hours = date.getHours();
      let minutes = date.getMinutes();
      let hoursEnd = dateEnd.getHours();
      let minutesEnd = dateEnd.getMinutes();
      if (date.getHours() < 10) hours = "0" + date.getHours();
      if (date.getMinutes() < 10) minutes = "0" + date.getMinutes();
      if (dateEnd.getHours() < 10) hoursEnd = "0" + dateEnd.getHours();
      if (dateEnd.getMinutes() < 10) minutesEnd = "0" + dateEnd.getMinutes();
      return (
        <div className="time__detail p-2" key={key}>
          <button
            className="btn"
            onClick={() => {
              handleOnClick(time.maLichChieu);
            }}
          >
            <span className="time__start">
              {hours}:{minutes}
            </span>
            ~ {hoursEnd}:{minutesEnd}
            <br />
            {date.getDate()}/{date.getMonth()}/{date.getFullYear()}
          </button>
        </div>
      );
    });
  };
  useEffect(() => {
    dispatch(getTheaterListRequest("BHDStar"));
  }, []);
  useEffect(() => {
    if (theaterList) {
      setActive(theaterList[0].maCumRap);
      dispatch(getMovieShowtimesByTheater("BHDStar", theaterList[0].maCumRap));
    }
  }, [theaterList]);

  if (redirect) {
    return <Redirect push to={`/checkout/${params}`} />;
  } else {
    return (
      <div className="showTimes" id="showTimes">
        <div className="block__break">
          <img src={imgbg} alt="block__break" />
        </div>
        <div className="showTime__content">
          <Row className="h-100 ">
            <Col xs={12}>
              <Tab.Container id="left-tabs-example" defaultActiveKey="BHDStar">
                <Row className="h-100  showTime__border">
                  <Col sm={1} className="brandFilm">
                    <Nav
                      variant="pills"
                      className="flex-column brandFilm__column "
                    >
                      {renderCinemaList()}
                    </Nav>
                  </Col>
                  <Col sm={4} className="listTheater">
                    <Tab.Content>{renderTabPane()}</Tab.Content>
                  </Col>
                  <Col sm={7} className="listTime">
                    {renderMovieShowtimes()}
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default ShowTime;
