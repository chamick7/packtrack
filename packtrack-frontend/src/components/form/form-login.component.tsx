import React, { useState } from "react";
import SquareInput from "../square-input/square-input.component";

import { Credential } from "../../types/credential";

import useLogin from "../../hooks/useLogin";

const FormLogin = () => {
  const { getLogin } = useLogin();

  const [credential, setCredential] = useState<Credential>({
    email: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCredential((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await getLogin(credential);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-[10vh] w-screen md:w-auto">
        <div className="flex flex-col items-center justify-center font-[kanit] text-[20px] mb-5 md:text-[24px]">
          เข้าสู่ระบบ
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-10/12 h-8/12">
          <SquareInput
            type="email"
            name="email"
            onChange={handleChange}
            value={credential.email}
            label="อีเมล"
          />
          <SquareInput
            type="password"
            name="password"
            onChange={handleChange}
            value={credential.password}
            label="รหัสผ่าน"
          />
          <div className="flex justify-center mt-4 md:justify-end">
            <button
              type="submit"
              className="flex justify-center items-center bg-main rounded text-white px-20 py-1 md:px-10 md:py-2"
            >
              ยืนยัน
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormLogin;
