import React, { useState } from "react";
import SquareInput from "../square-input/square-input.component";

import { Credential } from "../../types/credential";

import useLogin from "../../hooks/useLogin";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password is too short - should be 6 chars minimum"),
});

const FormLogin = () => {
  const { getLogin } = useLogin();
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credential>({ resolver: yupResolver(loginSchema) });

  const submit = async (user: Credential) => {
    setError(null);
    console.log(user);
    const result = await getLogin(user);

    if (!result) {
      setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center py-[10vh] w-screen md:w-auto">
        <div className="flex flex-col items-center justify-center font-[kanit] text-[20px] mb-5 md:text-[24px]">
          เข้าสู่ระบบ
        </div>
        {error && (
          <div className="text-center">
            <p className="inline font-[kanit] text-[14px] text-red-600">
              {error}
            </p>
          </div>
        )}
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col w-10/12 h-8/12"
        >
          <SquareInput
            type="email"
            signature="email"
            register={register}
            label="อีเมล"
          />
          {errors.email && (
            <p className="inline font-[kanit] text-[12px] text-red-600">
              {errors.email.message}
            </p>
          )}
          <SquareInput
            type="password"
<<<<<<< HEAD
            innerRef = {...register("password")}
=======
            signature="password"
            register={register}
>>>>>>> 1431fbc69690b9043906c393d1929e48bac75c99
            label="รหัสผ่าน"
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
