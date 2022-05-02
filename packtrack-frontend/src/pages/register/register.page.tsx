import React, { useEffect, useState } from "react";

import homeImg from "../../images/homeImg.svg";
import backgroundHome from "../../images/backgroundHome.svg";
import FormRegister from "../../components/form/form-register.component";
import Header from "../../components/menu/header.component";
import useInviteToken from "../../hooks/useInviteToken";
import { useSearchParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { FaRegClock } from "react-icons/fa";

const Register = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { validateToken } = useInviteToken();
  const [searchParams] = useSearchParams();
  const inviteToken = searchParams.get("token")?.toString();

  useEffect(() => {
    const validate = async (inputToken: string) => {
      const valid = await validateToken(inputToken);
      if (valid) {
        setIsLoading(false);
        setIsValid(true);
      } else {
        setIsLoading(false);
        setIsValid(false);
      }
    };

    if (inviteToken) {
      validate(inviteToken);
    }
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-screen h-screen">
        <ClipLoader color="#C84C42" size={150} />
      </div>
    );
  }

  if (isValid) {
    return (
      <>
        <div className="flex h-[8vh] w-full">
          <Header />
        </div>
        <div className="flex flex-col justify-center items-center h-[90vh] md:flex-row">
          <img
            src={backgroundHome}
            className="hidden md:block fixed top-[90%] w-fit"
            alt="Background"
          />
          <div className="flex justify-center items-center p-6 md:w-1/2 md:shadow-lg md:m-12 xl:mx-20">
            <FormRegister inviteToken={inviteToken} />
          </div>
          <div className="flex justify-center h-4/12 md:w-1/2">
            <img
              src={homeImg}
              className="w-8/12 p-2"
              alt="Package and trasporter"
            />
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex h-[8vh] w-full">
        <Header />
      </div>
      <div className="flex flex-col h-[90vh] w-full justify-center items-center md:flex-row">
        <div className="flex flex-col justify-center font-[kanit] text-base md:text-2xl">
          {/* <div className="flex justify-center text-2xl"><FaRegClock /></div> */}
          <div className="flex justify-center">ลิ้งก์หมดอายุ</div>
          <div className="flex justify-center">
            กรุณาติดต่อพนักงาน เพื่อดำเนินการขอลงทะเบียนอีกครั้ง
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
