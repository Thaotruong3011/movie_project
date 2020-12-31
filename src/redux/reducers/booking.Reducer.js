const initialState = {
  thongTinPhim: null,
  danhSachGhe: null,
  gheDangChon: [],
  bookingStatus: false,
  bookingInfo: null,
};
const bookingReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "GET_MOVIE_TICKET_LIST_SUCCESS":
      return {
        ...state,
        thongTinPhim: payload.thongTinPhim,
        danhSachGhe: payload.danhSachGhe,
      };
    case "CHON_GHE": {
      const index = state.danhSachGhe.findIndex(
        (ghe) => ghe.maGhe === payload.maGhe && !ghe.daDat
      );
      if (index !== -1) {
        const gheCu = state.danhSachGhe[index];
        const gheMoi = { ...gheCu, dangChon: !gheCu.dangChon };
        state.danhSachGhe[index] = gheMoi;
        const danhSachGhe = [...state.danhSachGhe];
        if (danhSachGhe[index].dangChon) {
          state.gheDangChon.push(danhSachGhe[index]);
        } else {
          const indexDangChon = state.gheDangChon.findIndex(
            (ghe) => ghe.maGhe === danhSachGhe[index].maGhe
          );
          state.gheDangChon.splice(indexDangChon, 1);
        }
        return { ...state, danhSachGhe };
      }
      return { ...state };
    }
    case "GET_BOOKING_REQUEST_SUCCESS": {
      console.log(payload);
      let status = state.bookingStatus;
      return { ...state, bookingStatus: !status, bookingInfo: payload };
    }
    case "SET_BOOKING_STATUS": {
      let status = state.bookingStatus;
      return { ...state, bookingStatus: !status };
    }
    default:
      return state;
  }
};
export default bookingReducer;
