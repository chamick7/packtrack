import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axiosApiInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";

interface Credential {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  phone: string;
  notify: string;
}

interface FormRegister {
  inviteToken:string | undefined;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const registerSchema = yup
  .object()
  .shape({
    firstName: yup.string().required("Firstname is required"),
    lastName: yup.string().required("Lastname is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    confirmPassword: yup
      .string()
      .required("Password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    phone: yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("phone is required"),
  })
  .required();



const FormRegister: React.FC<FormRegister> = ({inviteToken}) => {
  const navigate = useNavigate();

  const [credential, setCredential] = useState<Credential>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    notify: "",
  });

  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (credential !== null) {
      setStep((step) => step + 1);
    }
  };

  const previousStep = () => {
    setStep((step) => step - 1);
  };

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<Credential>({ resolver: yupResolver(registerSchema) });

  const onNext: SubmitHandler<Credential> = (data: Credential) => {
    nextStep();
  };

  const onSubmit: SubmitHandler<Credential> = async (user: Credential) => {
    delete user.confirmPassword
    const registerData = {inviteToken,user}
    try{
      let res = await axiosApiInstance.post("/api/user/invite/register", registerData);
      if(res.status === 200){
        navigate('/user')
      }
    }
    catch(err){
      console.log(err);
    }
  };


  return (
    <div className="flex justify-center items-center w-full h-full px-4 md:px-2">
      {step === 1 && (
        <form onSubmit={handleSubmit(onNext)} className="flex flex-col w-full">
          <div className="font-[kanit] text-lg text-center md:text-2xl">ลงทะเบียน</div>
          <div className="flex flex-row justify-start">
            <div className="w-1/2 mr-1">
              <div className="flex flex-col">
                <label
                  htmlFor="firstName"
                  className="inline font-[kanit] text-sm pl-4 translate-y-3 md:text-xl"
                >
                  <span className="bg-white px-1">ชื่อ</span>
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  className="shadow-none border-2 rounded border-main w-full px-2 md:py-1"
                />
                {errors.firstName && (
                  <p className="inline font-[kanit] text-[12px] text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="w-1/2">
              <div className="flex flex-col">
                <label
                  htmlFor="lastName"
                  className="inline font-[kanit] text-sm pl-4 translate-y-3 md:text-xl"
                >
                  <span className="bg-white px-1">นามสกุล</span>
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  className="shadow-none border-2 rounded border-main w-full px-2 md:py-1"
                />
                {errors.lastName && (
                  <p className="inline font-[kanit] text-[12px] text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="inline font-[kanit] text-sm pl-4 translate-y-3 md:text-xl"
            >
              <span className="bg-white px-1">อีเมล</span>
            </label>
            <input
              type="email"
              {...register("email")}
              className="shadow-none border-2 rounded border-main w-full px-2 md:py-1"
            />
            {errors.email && (
              <p className="inline font-[kanit] text-[12px] text-red-600">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="password"
              className="inline font-[kanit] text-sm pl-4 translate-y-3 md:text-xl"
            >
              <span className="bg-white px-1">รหัสผ่าน</span>
            </label>
            <input
              type="password"
              {...register("password")}
              className="shadow-none border-2 rounded border-main w-full px-2 md:py-1"
            />
            {errors.password && (
              <p className="inline font-[kanit] text-[12px] text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="confirmpassword"
              className="inline font-[kanit] text-sm pl-4 translate-y-3 md:text-xl"
            >
              <span className="bg-white px-1">ยืนยันรหัสผ่าน</span>
            </label>
            <input
              type="password"
              {...register("confirmPassword")}
              className="shadow-none border-2 rounded border-main w-full px-2 md:py-1"
            />
            {errors.confirmPassword && (
              <p className="inline font-[kanit] text-[12px] text-red-600">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="inline font-[kanit] text-sm pl-4 translate-y-3 md:text-xl"
            >
              <span className="bg-white px-1">เบอร์โทรศัพท์</span>
            </label>
            <input
              type="tel"
              {...register("phone")}
              className="shadow-none border-2 rounded border-main w-full px-2 md:py-1"
            />
            {errors.phone && (
              <p className="inline font-[kanit] text-[12px] text-red-600">
                {errors.phone.message}
              </p>
            )}
          </div>
          <div className="flex justify-center mt-2 md:justify-end font-[kanit] text-sm md:text-lg xl:text-xl">
            <input
              type="submit"
              value="ถัดไป"
              className="flex bg-main rounded text-white px-20 py-1 md:px-10"
            />
          </div>
        </form>
      )}
      {step === 2 && (
        <form
          className="flex flex-col w-full h-[40vh] justify-evenly items-center md:h-3/4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="font-[kanit] text-lg text-center xl:text-2xl">
            ช่องทางการแจ้งเตือน
          </div>
          <div className="flex flex-col justify-start w-1/2 xl:h-1/2 xl:justify-around">
            <div className="flex flex-row items-center">
              <input
                {...register("notify")}
                type="checkbox"
                value="Email"
                className="accent-main h-6 w-6 mr-2"
              />
              <label className="inline font-[kanit] text-lg leading-10 xl:text-xl">Email</label>
            </div>
            <div className="flex flex-row items-center">
              <input
                {...register("notify")}
                type="checkbox"
                value="SMS"
                className="accent-main h-6 w-6 mr-2"
              />
              <label className="inline font-[kanit] text-lg leading-10 xl:text-xl">SMS</label>
            </div>
            <div className="flex flex-row items-center">
              <input
                {...register("notify")}
                type="checkbox"
                value="Line"
                className="accent-main h-6 w-6 mr-2 "
              />
              <label className="inline font-[kanit] text-lg leading-10 xl:text-xl">
                Line Official
              </label>
            </div>
          </div>
          <div className="flex justify-evenly mt-2 font-[kanit] text-sm md:text-lg xl:text-xl md:w-3/4">
            <button
              onClick={previousStep}
              type="button"
              className="flex rounded  px-10 py-1"
            >
              ย้อนกลับ
            </button>
            <input
              type="submit"
              value="ยืนยัน"
              className="flex bg-main rounded text-white px-10 py-1 "
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default FormRegister;
