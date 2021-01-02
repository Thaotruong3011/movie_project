import React, { useEffect, useState } from "react";
import "./styles.scss";
import imgAcount from "../../assets/img/photo.png";
import warningIcon from "../../assets/img/exclamation.png";
import screen from "../../assets/img/screen.png";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieTicketList } from "../../redux/actions/booking.actions";
import { postBookingRequest } from "../../redux/actions/booking.actions";
import Loading from "../loading";
import { getCinemaListRequest } from "../../redux/actions/cinema.actions";
import ModalComponent from "../modal";
function CheckOutContent(props) {
  const params = useParams();
  const showtimeCode = params.showTimeCode;
  const dispatch = useDispatch();
  const detailFilm = useSelector((state) => state.booking.thongTinPhim);
  const seatList = useSelector((state) => state.booking.danhSachGhe);
  const isLoading = useSelector((state) => state.common.isLoading);
  const cinemaList = useSelector((state) => state.cinema.cinemaList);
  let listBooking = useSelector((state) => state.booking.gheDangChon);
  const bookingStatus = useSelector((state) => state.booking.bookingStatus);
  const user = props.user;
  const [userBooking, setUserBooking] = useState(user);
  const [stringNum, setStringNum] = useState("");
  const history = useHistory();

  let dangChon = false;
  // const classes = useStyles();
  function sumMoney() {
    let sumMoney = 0;
    if (seatList) {
      for (let ghe of seatList) {
        if (ghe.dangChon) {
          sumMoney = sumMoney + ghe.giaVe;
          dangChon = true;
        }
      }
      if (sumMoney === 0) return 0;
      sumMoney = (sumMoney / 1000).toFixed(3);
      return sumMoney;
    } else return 0;
  }
  function renderBrand() {
    let brandRap = detailFilm?.tenCumRap.split("-");
    brandRap = brandRap[0].trim();
    if (cinemaList) {
      for (let cinema of cinemaList) {
        let tenHeThongRap;
        if (cinema.biDanh.split("-")[0] === "bhd")
          tenHeThongRap = "BHD Star Cineplex";
        else if (cinema.biDanh.split("-")[0] === "cinestar")
          tenHeThongRap = "CNS";
        else if (cinema.biDanh.split("-")[0] === "galaxy")
          tenHeThongRap = "GLX";
        else tenHeThongRap = cinema.biDanh.split("-")[0];
        if (tenHeThongRap.toUpperCase() === brandRap.toUpperCase())
          return cinema.logo;
      }
    }
    return null;
  }
  function renderChair() {
    return seatList?.map((chair, key) => {
      return (
        <li
          className={`my-1 ${chair.daDat ? "daDat" : ""} ${
            chair.dangChon ? "dangChon" : ""
          }`}
          key={key}
          onClick={() => {
            dispatch({
              type: "CHON_GHE",
              payload: chair,
            });
          }}
        >
          {chair.tenGhe}
        </li>
      );
    });
  }
  function renderNumChair() {
    const gheDangChon = seatList.filter((ghe) => {
      return ghe.dangChon === true;
    });
    let stringNum = "";
    for (let ghe of gheDangChon) {
      stringNum = stringNum + " " + ghe.tenGhe + ",";
    }
    stringNum = stringNum.slice(0, -1);

    return stringNum;
  }
  function onChange(e) {
    setUserBooking({
      ...userBooking,
      [e.target.name]: e.target.value,
    });
  }
  function handleBooking() {
    if (listBooking[0]) {
      listBooking = listBooking.map((ghe) => {
        return {
          maGhe: ghe.maGhe,
          giaVe: ghe.giaVe,
        };
      });
      dispatch(postBookingRequest(showtimeCode, listBooking, history));
      setStringNum(renderNumChair());
     
    }
  }
  useEffect(() => {
    dispatch(getMovieTicketList(showtimeCode));
    if (!cinemaList) {
      dispatch(getCinemaListRequest());
    }
  }, []);
  if (isLoading) {
    return <Loading />;
  } else {
    if (detailFilm) {
      return (
        <div className="checkOut-content">
          <div className="stepCheckOut d-flex justify-content-between align-items-center">
            <ul className="d-flex align-items-center">
              <li className={bookingStatus ? "" : "active"}>
                <span className="stepNumber">01</span> CHỌN GHẾ & THANH TOÁN
              </li>
              <li className={bookingStatus ? "active" : ""}>
                <span className="stepNumber">02</span> KẾT QUẢ ĐẶT VÉ
              </li>
            </ul>
            <div className="acount__info">
              <img src={imgAcount} alt="imgAcount" />
              <span>{user.hoTen.toUpperCase()}</span>
            </div>
          </div>
          <div className="left__page">
            <img src={detailFilm.hinhAnh} alt="left-bg" />
          </div>
          <div className="seat__area">
            <div className="name__area">
              <div className="info__theater d-flex justify-content-start align-items-center">
                <img src={renderBrand()} alt="logo_theater" />
                <div>
                  <p>
                    <span>{detailFilm?.tenCumRap}</span>
                  </p>
                  <p className="date__movie">
                    Hôm nay - <span>{detailFilm?.gioChieu}</span> -
                    <span>{detailFilm?.tenRap.toUpperCase()}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="seats__map">
              <div className="screen__area d-flex justify-content-center">
                <img className="screen" src={screen} alt="screen" />
              </div>
              <div className="seat d-flex justify-content-center">
                <div className="seat-map">
                  <ul className="seat-row d-flex">{renderChair()}</ul>
                </div>
              </div>
              <div className="seat__note d-flex justify-content-center pt-4">
                <div className="seat__dangChon  d-flex mx-3">
                  <p className="color__seat mr-2 color__dangChon"></p>
                  <span>Ghế đang chọn </span>
                </div>
                <div className="seat__daDat d-flex mx-3">
                  <p className="color__seat mr-2 color__daDat"></p>
                  <span>Ghế đã có người đặt</span>
                </div>
                <div className="seat__trong d-flex mx-3">
                  <p className="color__seat mr-2"></p>
                  <span>Ghế trống</span>
                </div>
                <div></div>
              </div>
            </div>
          </div>
          <div className="booking">
            <div className="booking__content">
              <div className="total info__ticket d-flex justify-content-center align-items-center">
                <span>{sumMoney()}đ</span>
              </div>
              <div className="info__movie info__ticket">
                <span className="ageType">C16</span> {detailFilm.tenPhim}
                <p>{detailFilm.tenCumRap}</p>
                <p>{detailFilm.diaChi}</p>
                <p>
                  Hôm nay <span>{detailFilm.ngayChieu}</span> -{" "}
                  <span>{detailFilm?.gioChieu}</span> -
                  <span>{detailFilm?.tenRap.toUpperCase()}</span>
                </p>
              </div>
              <div className="info__seat info__ticket d-flex justify-content-between align-items-center">
                <span className="num__seat">Ghế {renderNumChair()}</span>
                <span className="mini__total">{sumMoney()}đ</span>
              </div>
              <div className="email__user info__ticket d-flex flex-column">
                <label htmlFor="email__user">E-Mail</label>
                <input
                  type="text"
                  id="email__user"
                  value={userBooking.email}
                  name="email"
                  onChange={(value) => onChange(value)}
                />
              </div>
              <div className="phone__user info__ticket d-flex flex-column">
                <label htmlFor="phone__user">Phone</label>
                <input
                  type="text"
                  id="phone__user"
                  name="soDT"
                  value={userBooking.soDT}
                  onChange={onChange}
                />
              </div>
              <div className="payments">
                <span>Hình thức thanh toán</span>
              </div>
              <div className="right__notice">
                <img src={warningIcon} alt="iconExclamation" />
                <span className="right__title">
                  Vé đã mua không thể đổi hoặc hoàn tiền <br />
                </span>
                <span className="right__title">
                  Mã vé sẽ được gửi qua tin nhắn
                  <span className="right__item"> ZMS</span> (tin nhắn Zalo) và
                  <span className="right__item"> Email</span> đã nhập.
                </span>
              </div>
            </div>
            <div className="booking__btn">
              <button
                className={`btn ${dangChon ? "dangChon" : "disabled"}`}
                onClick={handleBooking}
              >
                ĐẶT VÉ
              </button>
            </div>
          </div>
          <ModalComponent
            user={user}
            stringNum={stringNum}
            userBooking={userBooking}
          />
        </div>
      );
    } else {
      return <Loading />;
    }
  }
}

export default CheckOutContent;
