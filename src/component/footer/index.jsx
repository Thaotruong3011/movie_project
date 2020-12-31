import React from "react";
import { Col, Row } from "react-bootstrap";
import bhd from "../../assets/img/movie__brand/bhd.png";
import cgv from "../../assets/img/movie__brand/cgv.png";
import cineStar from "../../assets/img/movie__brand/cinestar.png";
import galaxy from "../../assets/img/movie__brand/galaxycine.png";
import lotte from "../../assets/img/movie__brand/404b8c4b80d77732e7426cdb7e24be20.png";
import ios from "../../assets/img/movie__brand/apple-logo.png";
import android from "../../assets/img/movie__brand/android-logo.png";
import facebook from "../../assets/img/movie__brand/facebook-logo.png";
import zalo from "../../assets/img/movie__brand/zalo-logo.png";
import "./styles.scss";
function Footer() {
  return (
    <div className="footer py-3">
      <div className="footer__content">
        <div className="link__company">
          <Row>
            <Col xs={4}>
              <p className="title">TIX</p>
              <Row>
                <Col xs={6} className="d-flex flex-column ">
                  <a className="tix__link">FAQ</a>
                  <a className="tix__link">Brand Guidelines</a>
                </Col>
                <Col xs={6} className="d-flex flex-column">
                  <a className="tix__link">Thỏa thuận sử dụng</a>
                  <a className="tix__link">Chính sách bảo mật</a>
                </Col>
              </Row>
            </Col>
            <Col xs={4}>
              <p className="title">ĐỐI TÁC</p>
              <Row>
                <Col xs={12} className="d-flex">
                  <a className="brand__link">
                    <img
                      src={cgv}
                      alt="cgv"
                      style={{ backgroundColor: "#fff" }}
                    />
                  </a>
                  <a className="brand__link">
                    <img src={bhd} alt="bhd" />
                  </a>
                  <a className="brand__link">
                    <img src={galaxy} alt="galaxy" />
                  </a>
                  <a className="brand__link">
                    <img src={cineStar} alt="cineStar" />
                  </a>
                  <a className="brand__link">
                    <img src={lotte} alt="lotte" />
                  </a>
                </Col>
                <Col xs={12} className="d-flex">
                  <a className="brand__link">
                    <img src={cgv} alt="cgv" />
                  </a>
                  <a className="brand__link">
                    <img src={bhd} alt="bhd" />
                  </a>
                  <a className="brand__link">
                    <img src={galaxy} alt="galaxy" />
                  </a>
                  <a className="brand__link">
                    <img src={cineStar} alt="cineStar" />
                  </a>
                  <a className="brand__link">
                    <img src={lotte} alt="lotte" />
                  </a>
                </Col>
                <Col xs={12} className="d-flex">
                  <a className="brand__link">
                    <img src={cgv} alt="cgv" />
                  </a>
                  <a className="brand__link">
                    <img src={bhd} alt="bhd" />
                  </a>
                  <a className="brand__link">
                    <img src={galaxy} alt="galaxy" />
                  </a>
                  <a className="brand__link">
                    <img src={cineStar} alt="cineStar" />
                  </a>
                  <a className="brand__link">
                    <img src={lotte} alt="lotte" />
                  </a>
                </Col>
                <Col xs={12} className="d-flex">
                  <a className="brand__link">
                    <img src={cgv} alt="cgv" />
                  </a>
                  <a className="brand__link">
                    <img src={bhd} alt="bhd" />
                  </a>
                  <a className="brand__link">
                    <img src={galaxy} alt="galaxy" />
                  </a>
                  <a className="brand__link">
                    <img src={cineStar} alt="cineStar" />
                  </a>
                  <a className="brand__link">
                    <img src={lotte} alt="lotte" />
                  </a>
                </Col>
              </Row>
            </Col>
            <Col xs={4}>
              <Row>
                <Col xs={6}>
                  <p className="title">MOBILE APP</p>
                  <a className="app__social__link">
                    <img src={ios} alt="ios" />
                  </a>
                  <a className="app__social__link">
                    <img src={android} alt="android" />
                  </a>
                </Col>
                <Col xs={6}>
                  <p className="title">SOCIAL</p>
                  <a className="app__social__link">
                    <img src={facebook} alt="facebook" />
                  </a>
                  <a className="app__social__link">
                    <img src={zalo} alt="zalo" />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Footer;
