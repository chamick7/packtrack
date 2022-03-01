import React, { useEffect, useState } from "react";

import homeImg from "../../images/homeImg.svg";
import backgroundHome from "../../images/backgroundHome.svg";
import FormRegister from "../../components/form/form-register.component";
import Header from "../../components/menu/header.component";
import useInviteToken from "../../hooks/useInviteToken";
import { useSearchParams } from "react-router-dom";

const Register = () => {
  const [isValid, setIsValid] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { validateToken } = useInviteToken();
  const [searchParmas, setSearchParams] = useSearchParams();
  const inviteToken = searchParmas.get("token")?.toString();

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
    return <h1>Loading</h1>;
  }

  if (isValid) {
    return (
      <>
        <div className="flex h-[8vh] w-full">
          <Header />
        </div>
        <div className="flex flex-col h-[90vh] md:flex-row">
          <img
            src={backgroundHome}
            className="hidden md:block fixed top-[90%] w-fit"
          />
          <div className="flex flex-col justify-center items-center h-8/12 md:w-1/2 md:shadow-lg md:m-12 xl:mx-20">
            <FormRegister />
          </div>
          <div className="flex justify-center h-4/12 md:w-1/2">
            <img src={homeImg} className="w-8/12 p-2" />
          </div>
        </div>
      </>
    );
  }

  return <h1>Token Expired</h1>;
};

export default Register;
