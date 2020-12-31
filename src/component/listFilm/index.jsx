import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./styles.scss";
// import useStyles from "./styles";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col } from "react-bootstrap";
import FilmItem from "../filmItem";
function ListFilm(props) {
  // const classes = useStyles();
  const movieList = props.movieList;
  function renderMovie(slice) {
    const movieArray = movieList?.map((movie, index) => {
      return (
        <Col xs={3} key={index}>
          <FilmItem movie={movie} />
        </Col>
      );
    });
    return movieArray?.splice(slice * 8, 8);
  }
  return (
    <div className="listFilm" id="listFilm">
      <div className="ListFilm__content">
        <Tabs defaultActiveKey="nowFilm" id="noanim-tab-example">
          <Tab eventKey="nowFilm" title="Đang Chiếu">
            <Carousel className=" h-100 w-100" indicators={false} pause="hover">
              <Carousel.Item>
                <Row>{renderMovie(2)}</Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>{renderMovie(1)}</Row>
              </Carousel.Item>
            </Carousel>
          </Tab>
          <Tab eventKey="soonFilm" title="Sắp Chiếu">
            <Carousel
              className=" h-100 w-100"
              indicators={false}
              pause="hover"
              // interval="null"
            >
              <Carousel.Item>
                <Row>{renderMovie(3)}</Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>{renderMovie(4)}</Row>
              </Carousel.Item>
            </Carousel>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default ListFilm;
