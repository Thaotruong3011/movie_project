import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { NavLink, useHistory } from "react-router-dom";
import "./styles.scss";
function ModalComponent(props) {
  const dispatch = useDispatch();
  //   const history=use
  const detailFilm = useSelector((state) => state.booking.thongTinPhim);
  const bookingStatus = useSelector((state) => state.booking.bookingStatus);
  const seatList = useSelector((state) => state.booking.danhSachGhe);
  const user = props.user;
  const userBooking = props.userBooking;
  const history = useHistory();
  const handleCloseModal = () => {
    dispatch({
      type: "SET_BOOKING_STATUS",
    });
    history.go();
  };
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
  return (
    <div>
      <div className="modal-block">
        <Modal
          className="modal__content"
          show={bookingStatus}
          onHide={handleCloseModal}
        >
          <Modal.Body>
            <div className="paper">
              <h2 id="transition-modal-title" className="text-center">
                Đặt vé thành công!
              </h2>

              <div
                id="transition-modal-description"
                className={` modal-info paper_block`}
              >
                <p className="paper__info">Thông tin vé</p>
                <p>
                  Tài khoản người đặt:{" "}
                  <span className="paper__info">{user.taiKhoan}</span>
                </p>

                <p>
                  Email:{" "}
                  <span className="paper__info">{userBooking.email}</span>
                </p>
                <p>
                  SDT: <span className="paper__info">{userBooking.soDT}</span>
                </p>

                <p>
                  Số ghế:{" "}
                  <span className="paper__info">{renderNumChair()}</span>
                </p>
                <p>
                  Tên phim:{" "}
                  <span className="paper__info">{detailFilm.tenPhim}</span>
                </p>
                <p>
                  Cụm rạp:{" "}
                  <span className="paper__info">{detailFilm.tenCumRap}</span>
                </p>
                <p>{detailFilm.diaChi}</p>
                <p className="paper__info">
                  <span>{detailFilm.ngayChieu}</span> -{" "}
                  <span>{detailFilm?.gioChieu}</span> -
                  <span>{detailFilm?.tenRap.toUpperCase()}</span>
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={handleCloseModal}>Tiếp tục</Button>
            <div onClick={handleCloseModal}>
              <NavLink to="/">Về trang chủ</NavLink>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default ModalComponent;
