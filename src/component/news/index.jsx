import React from "react";
import imgbg from "../../assets/img/back-news.png";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "./styles.scss";
import { Row, Col } from "react-bootstrap";
import exMovieBig from "../../assets/img/film__news/ex-movie-big.png";
import exMovieBig2 from "../../assets/img/film__news/ex-movie-big2.jpg";
import exMovieSmall from "../../assets/img/film__news/ex-movie-small.png";
import exMovieSmall2 from "../../assets/img/film__news/ex-movie-small2.png";
import exMovieSmall3 from "../../assets/img/film__news/ex-movie-small3.png";
import exMovieYellow from "../../assets/img/film__news/ex-movie-yellow.jpg";
import exMovie3 from "../../assets/img/film__news/antebellum-4-ly-do-khong-the-bo-lo-sieu-pham-kinh-di-antebellum-bay-thuc-tai-kinh-hoang-16045678023913.png";
function News() {
  return (
    <div className="news" id="news">
      <div className="block__break">
        <img src={imgbg} alt="block__break" />
      </div>
      <div className="news__content">
        <Tabs defaultActiveKey="movie24h" id="noanim-tab-example">
          <Tab eventKey="movie24h" title="Điện Ảnh 24h">
            <Row>
              <Col xs={6}>
                <div className="news__item movie__big">
                  <div className="movie__thumbail">
                    <img src={exMovieBig} alt="movieThumbail" />
                  </div>
                  <a>
                    Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                    chiếu
                  </a>
                  <p>
                    Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu
                    lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn
                    ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ
                    trong một khung hình để ăn mừng thành tích ấn tượng của tác
                    phẩm.
                  </p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="news__item movie__big">
                  <div className="movie__thumbail">
                    <img src={exMovieBig2} alt="movieThumbail" />
                  </div>
                  <a>
                    NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                    PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
                  </a>
                  <p>
                    Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã
                    chính thức phát động cuộc thi thiết kế trang phục cho siêu
                    anh hùng VINAMAN với tổng giá trị giải thưởng lên đến 60
                    triệu đồng.
                  </p>
                </div>
              </Col>
              <Col xs={4}>
                <div className="news__item movie__medium">
                  <div className="movie__thumbail">
                    <img src={exMovie3} alt="movieThumbail" />
                  </div>
                  <a>
                    [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                    Antebellum: Bẫy Thực Tại Kinh Hoàng
                  </a>
                  <p>
                    Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác
                    những mảng tối của xã hội trên nền một câu chuyện kinh dị,
                    có sự tham gia của nhà sản xuất đã làm nên thành công của
                    loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”,
                    và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ
                    Ante
                  </p>
                </div>
              </Col>
              <Col xs={4}>
                <div className="news__item movie__medium">
                  <div className="movie__thumbail">
                    <img src={exMovieYellow} alt="movieThumbail" />
                  </div>
                  <a>
                    [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                    Antebellum: Bẫy Thực Tại Kinh Hoàng
                  </a>
                  <p>
                    Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác
                    những mảng tối của xã hội trên nền một câu chuyện kinh dị,
                    có sự tham gia của nhà sản xuất đã làm nên thành công của
                    loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”,
                    và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ
                    Ante
                  </p>
                </div>
              </Col>
              <Col xs={4}>
                <Row xs={12}>
                  <div className="news__item movie__small d-flex align-items-center justify-content-center">
                    <div className="movie__thumbail w-25">
                      <img src={exMovieSmall} alt="movieThumbail" />
                    </div>
                    <a>
                      Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                      Christopher Nolan
                    </a>
                  </div>
                </Row>
                <Row xs={12}>
                  <div className="news__item movie__small d-flex align-items-center justify-content-center">
                    <div className="movie__thumbail  w-25">
                      <img src={exMovieSmall2} alt="movieThumbail" />
                    </div>
                    <a>
                      Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                      Christopher Nolan
                    </a>
                  </div>
                </Row>
                <Row xs={12}>
                  <div className="news__item movie__small d-flex align-items-center justify-content-center ">
                    <div className="movie__thumbail  w-25">
                      <img src={exMovieSmall3} alt="movieThumbail" />
                    </div>
                    <a>
                      Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                      Christopher Nolan
                    </a>
                  </div>
                </Row>
                <Row xs={12}>
                  <div className="news__item movie__small d-flex align-items-center justify-content-center">
                    <div className="movie__thumbail  w-25">
                      <img src={exMovieSmall} alt="movieThumbail" />
                    </div>
                    <a>
                      Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                      Christopher Nolan
                    </a>
                  </div>
                </Row>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="review" title="Review">
            <Row>
              <Col xs={6}>
                <div className="news__item movie__big">
                  <div className="movie__thumbail">
                    <img src={exMovieBig} alt="movieThumbail" />
                  </div>
                  <a>
                    Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                    chiếu
                  </a>
                  <p>
                    Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu
                    lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn
                    ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ
                    trong một khung hình để ăn mừng thành tích ấn tượng của tác
                    phẩm.
                  </p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="news__item movie__big">
                  <div className="movie__thumbail">
                    <img src={exMovieBig2} alt="movieThumbail" />
                  </div>
                  <a>
                    NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                    PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
                  </a>
                  <p>
                    Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã
                    chính thức phát động cuộc thi thiết kế trang phục cho siêu
                    anh hùng VINAMAN với tổng giá trị giải thưởng lên đến 60
                    triệu đồng.
                  </p>
                </div>
              </Col>
              <Col xs={4}>
                <div className="news__item movie__medium">
                  <div className="movie__thumbail">
                    <img src={exMovie3} alt="movieThumbail" />
                  </div>
                  <a>
                    [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                    Antebellum: Bẫy Thực Tại Kinh Hoàng
                  </a>
                  <p>
                    Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác
                    những mảng tối của xã hội trên nền một câu chuyện kinh dị,
                    có sự tham gia của nhà sản xuất đã làm nên thành công của
                    loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”,
                    và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ
                    Ante
                  </p>
                </div>
              </Col>
              <Col xs={4}>
                <div className="news__item movie__medium">
                  <div className="movie__thumbail">
                    <img src={exMovieYellow} alt="movieThumbail" />
                  </div>
                  <a>
                    [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                    Antebellum: Bẫy Thực Tại Kinh Hoàng
                  </a>
                  <p>
                    Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác
                    những mảng tối của xã hội trên nền một câu chuyện kinh dị,
                    có sự tham gia của nhà sản xuất đã làm nên thành công của
                    loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”,
                    và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ
                    Ante
                  </p>
                </div>
              </Col>
              <Col xs={4}>
                <Row xs={12}>
                  <div className="news__item movie__small d-flex align-items-center justify-content-center">
                    <div className="movie__thumbail w-25">
                      <img src={exMovieSmall} alt="movieThumbail" />
                    </div>
                    <a>
                      Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                      Christopher Nolan
                    </a>
                  </div>
                </Row>
                <Row xs={12}>
                  <div className="news__item movie__small d-flex align-items-center justify-content-center">
                    <div className="movie__thumbail  w-25">
                      <img src={exMovieSmall2} alt="movieThumbail" />
                    </div>
                    <a>
                      Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                      Christopher Nolan
                    </a>
                  </div>
                </Row>
                <Row xs={12}>
                  <div className="news__item movie__small d-flex align-items-center justify-content-center ">
                    <div className="movie__thumbail  w-25">
                      <img src={exMovieSmall3} alt="movieThumbail" />
                    </div>
                    <a>
                      Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                      Christopher Nolan
                    </a>
                  </div>
                </Row>
                <Row xs={12}>
                  <div className="news__item movie__small d-flex align-items-center justify-content-center">
                    <div className="movie__thumbail  w-25">
                      <img src={exMovieSmall} alt="movieThumbail" />
                    </div>
                    <a>
                      Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                      Christopher Nolan
                    </a>
                  </div>
                </Row>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="promotion" title="Khuyến Mãi">
            <Row>
              <Col xs={6}>
                <div className="news__item movie__big">
                  <div className="movie__thumbail">
                    <img src={exMovieBig} alt="movieThumbail" />
                  </div>
                  <a>
                    Tiệc Trăng Máu chính thức cán mốc 100 tỷ chỉ sau 2 tuần công
                    chiếu
                  </a>
                  <p>
                    Sau 2 tuần ra mắt, Tiệc Trăng Máu chính thức gia nhập câu
                    lạc bộ phim điện ảnh đạt 100 tỷ đồng doanh thu phòng vé. Dàn
                    ngôi sao “bạc tỷ” của phim cũng lần đầu tiên hội tụ đầy đủ
                    trong một khung hình để ăn mừng thành tích ấn tượng của tác
                    phẩm.
                  </p>
                </div>
              </Col>
              <Col xs={6}>
                <div className="news__item movie__big">
                  <div className="movie__thumbail">
                    <img src={exMovieBig2} alt="movieThumbail" />
                  </div>
                  <a>
                    NGÔ THANH VÂN CHÍNH THỨC KHỞI ĐỘNG CUỘC THI THIẾT KẾ TRANG
                    PHỤC CHO SIÊU ANH HÙNG ĐẦU TIÊN CỦA VIỆT NAM – VINAMAN
                  </a>
                  <p>
                    Chiều tối ngày 30-10-2020, Ngô Thanh Vân và Studio68 đã
                    chính thức phát động cuộc thi thiết kế trang phục cho siêu
                    anh hùng VINAMAN với tổng giá trị giải thưởng lên đến 60
                    triệu đồng.
                  </p>
                </div>
              </Col>
              <Col xs={4}>
                <div className="news__item movie__medium">
                  <div className="movie__thumbail">
                    <img src={exMovie3} alt="movieThumbail" />
                  </div>
                  <a>
                    [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                    Antebellum: Bẫy Thực Tại Kinh Hoàng
                  </a>
                  <p>
                    Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác
                    những mảng tối của xã hội trên nền một câu chuyện kinh dị,
                    có sự tham gia của nhà sản xuất đã làm nên thành công của
                    loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”,
                    và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ
                    Ante
                  </p>
                </div>
              </Col>
              <Col xs={4}>
                <div className="news__item movie__medium">
                  <div className="movie__thumbail">
                    <img src={exMovieYellow} alt="movieThumbail" />
                  </div>
                  <a>
                    [ANTEBELLUM] - 4 lý do không thể bỏ lỡ siêu phẩm kinh dị
                    Antebellum: Bẫy Thực Tại Kinh Hoàng
                  </a>
                  <p>
                    Không đi theo lối mòn máu me, hù dọa mà đầu tư khai thác
                    những mảng tối của xã hội trên nền một câu chuyện kinh dị,
                    có sự tham gia của nhà sản xuất đã làm nên thành công của
                    loạt tác phẩm ấn tượng “Get Out”, “Us” hay “BlacKkKlansman”,
                    và còn nhiều lý do khác khiến người yêu phim không thể bỏ lỡ
                    Ante
                  </p>
                </div>
              </Col>
              <Col xs={4}>
                <Row xs={12}>
                  <div className="news__item movie__small d-flex align-items-center justify-content-center">
                    <div className="movie__thumbail w-25">
                      <img src={exMovieSmall} alt="movieThumbail" />
                    </div>
                    <a>
                      Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                      Christopher Nolan
                    </a>
                  </div>
                </Row>
                <Row xs={12}>
                  <div className="news__item movie__small d-flex align-items-center justify-content-center">
                    <div className="movie__thumbail  w-25">
                      <img src={exMovieSmall2} alt="movieThumbail" />
                    </div>
                    <a>
                      Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                      Christopher Nolan
                    </a>
                  </div>
                </Row>
                <Row xs={12}>
                  <div className="news__item movie__small d-flex align-items-center justify-content-center ">
                    <div className="movie__thumbail  w-25">
                      <img src={exMovieSmall3} alt="movieThumbail" />
                    </div>
                    <a>
                      Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                      Christopher Nolan
                    </a>
                  </div>
                </Row>
                <Row xs={12}>
                  <div className="news__item movie__small d-flex align-items-center justify-content-center">
                    <div className="movie__thumbail  w-25">
                      <img src={exMovieSmall} alt="movieThumbail" />
                    </div>
                    <a>
                      Dàn mỹ nhân trong thế giới điện ảnh của quái kiệt
                      Christopher Nolan
                    </a>
                  </div>
                </Row>
              </Col>
            </Row>
          </Tab>
        </Tabs>
        <div className="wrap-button py-3 d-flex justify-content-center align-items-center">
          <button className="btn btn-outline-secondary ">XEM THÊM</button>
        </div>
      </div>
    </div>
  );
}

export default News;
