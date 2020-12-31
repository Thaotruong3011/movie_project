import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import exampleImgTheater from "../../assets/img/exampleImgTheater.jpg";
import Collapse from "react-bootstrap/Collapse";
import {
  getCinemaListRequest,
  getTheaterListRequest,
} from "../../redux/actions/cinema.actions";
import Loading from "../loading";
import { Redirect } from "react-router-dom";
function MovieDetailShowTime() {
  const cinemaList = useSelector((state) => state.cinema.cinemaList);
  const listShowtime = useSelector((state) => state.movie.showTimeValidated);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [params, setParams] = useState("");
  let arrCinemaValidated = [];
  const renderCinemaList = () => {
    if (cinemaList) {
      for (let index in cinemaList) {
        let item;
        item = listShowtime.find(
          (showtime) =>
            cinemaList[index].maHeThongRap === showtime.thongTinRap.maHeThongRap
        );
        if (item) arrCinemaValidated.push(cinemaList[index]);
      }
    }
    return arrCinemaValidated?.map((cinema, key) => {
      return (
        <Nav.Item key={key}>
          <Nav.Link
            eventKey={cinema.maHeThongRap}
            className="d-flex align-items-center "
            onClick={() => {
              // handleActiveTab(cinema.maHeThongRap);
            }}
          >
            <img src={cinema.logo} alt="brand__theater" />
            <span>{cinema.tenHeThongRap}</span>
          </Nav.Link>
        </Nav.Item>
      );
    });
  };
  const renderTabPane = () => {
    return arrCinemaValidated?.map((cinema, key) => {
      return (
        <Tab.Pane className="w-100" eventKey={cinema.maHeThongRap} key={key}>
          {renderListShowtime(cinema.maHeThongRap)}
        </Tab.Pane>
      );
    });
  };
  const renderListShowtime = (maHeThongRap) => {
    let arrRapDaCheck = [];
    let arrRap = [];
    let arrCumRap = listShowtime.filter(
      (showtime) => showtime.thongTinRap.maHeThongRap === maHeThongRap
    );
    for (let CumRap of arrCumRap) {
      if (arrRapDaCheck.indexOf(CumRap.thongTinRap.maCumRap) === -1) {
        let arrResult = arrCumRap.filter(
          (Rap) => CumRap.thongTinRap.maCumRap === Rap.thongTinRap.maCumRap
        );
        arrRapDaCheck.push(CumRap.thongTinRap.maCumRap);
        arrRap.push(arrResult);
      }
    }
    if (arrRap.length !== 0) {
      return arrRap.map((rap, key) => {
        return (
          <div className="time__film__content mx-3 my-1" key={key}>
            <div
              className="movieInfo  d-flex"
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              <img src={exampleImgTheater} alt="miniMovie" />
              <div className="wrap__info movie__title">
                <span className="brand_name">
                  {rap[0].thongTinRap.tenCumRap.indexOf("BHD") !== -1
                    ? rap[0].thongTinRap.tenCumRap.slice(
                        0,
                        rap[0].thongTinRap.tenCumRap.indexOf(" ") + 14
                      )
                    : rap[0].thongTinRap.tenCumRap.slice(
                        0,
                        rap[0].thongTinRap.tenCumRap.indexOf(" ")
                      )}
                </span>
                {rap[0].thongTinRap.tenCumRap.indexOf("BHD") !== -1
                  ? rap[0].thongTinRap.tenCumRap.slice(
                      rap[0].thongTinRap.tenCumRap.indexOf(" ") + 14
                    )
                  : rap[0].thongTinRap.tenCumRap.slice(
                      rap[0].thongTinRap.tenCumRap.indexOf(" ")
                    )}
                <div className="theater__adress">890 Trần Hưng Đạo, Q.5</div>
                <a href="#">[chi tiết]</a>
              </div>
            </div>
            <Collapse in={open}>
              <div className="movie__showtimes" id="example-collapse-text">
                <span>2D Digital</span>
                <div className="listTimeDetail row ">
                  {renderTimeDetail(rap)}
                </div>
              </div>
            </Collapse>
          </div>
        );
      });
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
    if (!cinemaList) {
      dispatch(getCinemaListRequest());
    }
  }, []);

  if (redirect) {
    return <Redirect push to={`/checkout/${params}`} />;
  } else {
    return (
      <Row className=" block__LichChieu" id="block__LichChieu">
        <Col xs={12}>
          <Tab.Container id="left-tabs-example" defaultActiveKey="BHDStar">
            <Row className="h-100 showTime__border">
              <Col xs={3} className="brandFilm h-100">
                <Nav variant="pills" className="flex-column brandFilm__column ">
                  {renderCinemaList()}
                </Nav>
              </Col>
              <Col xs={9} className="dayAndtime__film">
                <Row className="w-100">
                  {/* <Col xs={12} className="p-0 w-100 day__film ">
                  <Tab.Content className="m-0 pt-2">
                    {renderTabPane()}
                  </Tab.Content>
                </Col> */}
                  <Col xs={12} className=" p-0 w-100 time__film">
                    <Tab.Content className="mt-3">
                      {renderTabPane()}
                    </Tab.Content>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Tab.Container>
        </Col>
      </Row>
    );
  }
}

export default MovieDetailShowTime;
