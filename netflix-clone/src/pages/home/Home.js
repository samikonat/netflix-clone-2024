import React from "react";
import Header from "../../cocomponents/Header/Header";
import Footer from "../../cocomponents/Footer/Footer";
import Banner from "../../cocomponents/Baner/Banner";
import RowList from "../../cocomponents/Row/RowList/RowList";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <RowList />
      <Footer />
    </>
  );
};

export default Home;
