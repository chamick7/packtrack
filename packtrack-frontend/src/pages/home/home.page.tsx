import React, { useEffect } from "react";

import Header from "../../components/menu/header.component";
import FirstHome from "../../components/้home/first-home.component";
import SecondHome from "../../components/้home/second-home.component";
import ThirdHome from "../../components/้home/third-home.component";
import FourHome from "../../components/้home/four-home.component";
import FiveHome from "../../components/้home/five-home.component";
import Footer from "../../components/menu/footer.component";
import { useSearchParams, useLocation } from "react-router-dom";
import * as Scroll from "react-scroll";

const HomePage = () => {
  const [searchParmas, setSearchParams] = useSearchParams();
  const path = useLocation();

  const scrollTo = (section:string) => {
    Scroll.scroller.scrollTo(section, {
      duration: 1200,
      smooth: true,
      ease: "easeInOutQuint",
      offset: -25, // Scrolls to element + 50 pixels down the page
    });
  };

  useEffect(() => {
    const section = searchParmas.get("section");
    if(section){
        scrollTo(section);
    }

  }, [path]);

  return (
    <>
      <Header />
      <div>
        <div>
          <FirstHome />
          <SecondHome />
          <ThirdHome />
          <Scroll.Element name="about">
            <FourHome />
          </Scroll.Element>
          <Scroll.Element name="manual">
          <FiveHome />
          </Scroll.Element>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
