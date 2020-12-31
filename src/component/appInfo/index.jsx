import React from "react";
import "./styles.scss";
import mobile from "../../assets/img/mobile.png";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../assets/img/slideMobile/slide1.jpg";
import slide2 from "../../assets/img/slideMobile/slide14.jpg";
import slide3 from "../../assets/img/slideMobile/slide4.jpg";
import slide4 from "../../assets/img/slideMobile/slide9.jpg";
function AppInfo() {
  return (
    <div className="appInfo" id="appInfo">
      <div className="container">
        <div className="row">
          <div className="col-6 app-left">
            <h2>Ứng dụng tiện lợi dành cho người yêu điện ảnh</h2>
            <p>
              Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
              đổi quà hấp dẫn.
            </p>
            <button className="btn">App miễn phí - Tải về ngay!</button>
            <br />
            <span>
              TIX có hai phiên bản{" "}
              <a className="p-3" href="#">
                iOS
              </a>
              <a href="#">Android</a>
            </span>
          </div>
          <div className="col-6 app-right">
            <div className="phone__app">
              <img className="phoneUI" src={mobile} alt="PhoneUI" />
              <div className="slider__mobile">
                <Carousel
                  className=" h-100 w-100"
                  indicators={false}
                  controls={false}
                  interval={2000}
                  slide={false}
                  pause="hover"
                >
                  <Carousel.Item>
                    <img src={slide1} alt="slide" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={slide2} alt="slide" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={slide3} alt="slide" />
                  </Carousel.Item>

                  <Carousel.Item>
                    <img src={slide4} alt="slide" />
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppInfo;
