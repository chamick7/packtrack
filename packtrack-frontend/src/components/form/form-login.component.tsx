import React, { useState } from "react";
import SquareInput from "../square-input/square-input.component";

import { Credential } from "../../types/credential";

import useLogin from "../../hooks/useLogin";

import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const FormLogin = () => {
  const { getLogin } = useLogin();

  const [credential, setCredential] = useState<Credential>({
    email: "",
    password: "",
  });

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Credential>({ resolver: yupResolver(loginSchema) });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCredential((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit: SubmitHandler<Credential> = async (user: Credential) => {
    await getLogin(user);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-[10vh] w-screen md:w-auto">
        <div className="flex flex-col items-center justify-center font-[kanit] text-[20px] mb-5 md:text-[24px]">
          เข้าสู่ระบบ
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-10/12 h-8/12"
        >
          <SquareInput type="email" {...register("email")} label="อีเมล" onChange={handleChange} />
          {errors.email && (
            <p className="inline font-[kanit] text-[12px] text-red-600">
              {errors.email.message}
            </p>
          )}
          <SquareInput
            type="password"
            {...register("password")}
            label="รหัสผ่าน"
            onChange={handleChange}
          />
          {errors.password && (
            <p className="inline font-[kanit] text-[12px] text-red-600">
              {errors.password.message}
            </p>
          )}
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
