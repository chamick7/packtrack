import React from "react";

import tlp from "../../images/LogoIMG/tlp.svg";
import spx from "../../images/LogoIMG/spx.svg";
import ker from "../../images/LogoIMG/ker.svg";
import lzd from "../../images/LogoIMG/lzd.svg";
import jnt from "../../images/LogoIMG/jnt.svg";
import dhl from "../../images/LogoIMG/dhl.svg";
import fls from "../../images/LogoIMG/fls.svg";
import fdx from "../../images/LogoIMG/fdx.svg";

const ThirdHome = () => {
  return (
    <div className="flex flex-col justify-evenly h-full px-4 my-5 md:h-screen md:px-20 ">
      <div className="font-[kanit] text-xl py-4 xl:text-3xl">
        <span className="underline underline-offset-2 decoration-main decoration-4">
          บริษัทข
        </span>
        นส่งที่รองรับ . .
      </div>
      <div className="flex justify-center">
      <div className="md:w-10/12">
        <div className="flex flex-col md:flex-row md:justify-center">
          <div className="flex flex-row">
            <div className="flex flex-col mt-5 md:mt-20">
              <div>
                <img src={tlp} className="aspect-square w-fit" />
              </div>
              <div>
                <img src={spx} className="aspect-square w-fit" />
              </div>
            </div>
            <div className="flex flex-col">
              <div>
                <img src={ker} className="aspect-square w-fit" />
              </div>
              <div>
                <img src={lzd} className="aspect-square w-fit" />
              </div>
            </div>
          </div>
          <div className="flex flex-row md:mt-20">
            <div className="flex flex-col">
              <div>
                <img src={jnt} className="aspect-square w-fit" />
              </div>
              <div>
                <img src={dhl} className="aspect-square w-fit" />
              </div>
            </div>
            <div className="flex flex-col -translate-y-32 md:-translate-y-0 mt-20">
              <div>
                <img src={fls} className="aspect-square w-fit" />
              </div>
              <div>
                <img src={fdx} className="aspect-square w-fit" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default ThirdHome;
