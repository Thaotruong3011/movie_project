// import { makeStyles } from "@material-ui/core";
import React, { Component } from "react";
import AppInfo from "../../component/appInfo";
import Carousel from "../../component/carousel";
import Footer from "../../component/footer";
import Header from "../../component/header";
// // import useStyles from "./styles";
import ListFilm from "../../component/listFilm";
import News from "../../component/news";
import ShowTime from "../../component/showtimes";
import "./styles.scss";
import { connect } from "react-redux";
import { getMovieListRequest } from "../../redux/actions/movie.actions";
import Loading from "../../component/loading";
import { getCinemaListRequest } from "../../redux/actions/cinema.actions";
class Home extends Component {
  render() {
    const { isLoading } = this.props;
    const { movieList } = this.props;
    if (isLoading) {
      return (
        <div className="home">
          <Loading />
        </div>
      );
    } else {
      return (
        <div className="home">
          <Header />
          <Carousel />
          <ListFilm movieList={movieList} />
          <ShowTime />
          <News />
          <AppInfo />
          <Footer />
        </div>
      );
    }
  }

  componentDidMount() {
    this.props.dispatch(getMovieListRequest());
    this.props.dispatch(getCinemaListRequest());
    // this.props.dispatch(getTheaterListRequest("BHDStar"));
  }
}
const mapStateToProps = (state) => {
  return {
    isLoading: state.common.isLoading,
    movieList: state.movie.movieList,
  };
};

export default connect(mapStateToProps)(Home);
