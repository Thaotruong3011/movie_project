import React, { useEffect } from "react";
import Header from "../../component/header";
import MovieDetail from "../../component/movie-detail";
import Footer from "../../component/footer";
import { useSelector } from "react-redux";
import Loading from "../../component/loading";

function Detail() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <MovieDetail />
      <Footer />
    </div>
  );
}

export default Detail;
