import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import axios from "axios";

import SquareInput from "../square-input/square-input.component";
import SquareButton from "../button/square-button.component";

import "./form-register.scss";

interface Credential {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
  phone: string;
}

const registerSchema = yup
  .object()
  .shape({
    firstname: yup.string().required("Firstname is required"),
    lastname: yup.string().required("Lastname is required"),
    email: yup.string().email().required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(6, "Password is too short - should be 6 chars minimum")
      .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
    confirmpassword: yup
      .string()
      .required("Password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
    phone: yup
      .number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10)
      .required("A phone number is required"),
  })
  .required();

const FormRegister: React.FC = () => {
  const [credential, setCredential] = useState<Credential>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
    phone: "",
  });

  const [step, setStep] = useState(1);

  const nextStep = () => {
      setStep((step) => step + 1);
  };
  
  const previousStep = () => {
    setStep((step) => step - 1);
  }

  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Credential>({ resolver: yupResolver(registerSchema) });

  const onSubmit: SubmitHandler<Credential> = (data: Credential) => {
    console.log(data);
  };

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;

  //   setCredential((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   console.log("click");

  // };

  return (
    <div className="form-register-container">
      <form onSubmit={handleSubmit(onSubmit)} className="form-register">
        {step === 1 && (
          <>
            <div className="head-form mb-1">ลงทะเบียน</div>
            <div className="d-flex flex-row justify-content-between">
              <div style={{ width: "17vw" }}>
                <div className="square-input-layout">
                  <label htmlFor="firstname" className="label">
                    <span className="spanwhite px-1 py-0">ชื่อ</span>
                  </label>
                  <input type="text" {...register("firstname")} />
                  {errors.firstname && <p>{errors.firstname.message}</p>}
                </div>
              </div>
              <div style={{ width: "17vw" }}>
                <div className="square-input-layout">
                  <label htmlFor="lastname" className="label">
                    <span className="spanwhite px-1 py-0">นามสกุล</span>
                  </label>
                  <input type="text" {...register("lastname")} />
                  {errors.lastname && <p>{errors.lastname.message}</p>}
                </div>
              </div>
            </div>
            <div className="square-input-layout">
              <label htmlFor="email" className="label">
                <span className="spanwhite px-1 py-0">อีเมล</span>
              </label>
              <input type="email" {...register("email")} />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <div className="square-input-layout">
              <label htmlFor="password" className="label">
                <span className="spanwhite px-1 py-0">รหัสผ่าน</span>
              </label>
              <input type="password" {...register("password")} />
              {errors.password && <p>{errors.password.message}</p>}
            </div>
            <div className="square-input-layout">
              <label htmlFor="confirmpassword" className="label">
                <span className="spanwhite px-1 py-0">ยืนยันรหัสผ่าน</span>
              </label>
              <input type="password" {...register("confirmpassword")} />
              {errors.confirmpassword && (
                <p>{errors.confirmpassword.message}</p>
              )}
            </div>
            <div className="square-input-layout">
              <label htmlFor="phone" className="label">
                <span className="spanwhite px-1 py-0">เบอร์โทรศัพท์</span>
              </label>
              <input type="tel" {...register("phone")} />
              {errors.phone && <p>{errors.phone.message}</p>}
            </div>
            <div className="d-flex justify-content-end mt-4">
              <button onClick={nextStep} type="button">
                ถัดไป
              </button>

            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className="head-form mb-1">ช่องทางการแจ้งเตือน</div>
            <div className="d-flex flex-column justify-content-between">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="notify"
                  checked
                />
                <label className="form-check-label">Email</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="notify"
                />
                <label className="form-check-label">SMS</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="notify"
                />
                <label className="form-check-label">Line Official</label>
              </div>
              <div className="d-flex justify-content-between mt-4">
              <button onClick={previousStep} type="button">
                ย้อนกลับ
              </button>
              <input type="submit" />
              </div>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default FormRegister;

//  <form onSubmit={handleSubmit(onSubmit)} className="form-register">
//         {step === 1 && (<>
//         <div className="head-form mb-1">ลงทะเบียน</div>
//         <div className="d-flex flex-row justify-content-between">
//           <div style={{width:"17vw"}}>
//           <label htmlFor="firstname">ชื่อ</label>
//           <input id="firstname" name="firstname" type="text" ref={register} />
//           <SquareInput
//           type="text"
//           name="firstname"
//           onChange={handleChange}
//           value={credential.firstname}
//           label="ชื่อ"
//           required
//         />
//         </div>
//         <div style={{width:"17vw"}}>
//         <SquareInput
//           type="text"
//           name="lastname"
//           onChange={handleChange}
//           value={credential.lastname}
//           label="นามสกุล"
//           required
//         />
//         </div>
//         </div>
//         <SquareInput
//           type="email"
//           name="email"
//           onChange={handleChange}
//           value={credential.email}
//           label="อีเมล"
//           required
//         />
//         <SquareInput
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={credential.password}
//           label="รหัสผ่าน"
//           required
//         />
//         <SquareInput
//           type="password"
//           name="password"
//           onChange={handleChange}
//           value={credential.confirmpassword}
//           label="ยืนยันรหัสผ่าน"
//           required
//         />
//         <SquareInput
//           type="tel"
//           name="phone"
//           onChange={handleChange}
//           value={credential.phone}
//           label="เบอร์โทรศัพท์"
//           required
//         />
//         <div className="d-flex justify-content-end mt-4">
//         <button onClick={nextStep}>ถัดไป</button>
//         {/* <SquareButton type="submit"  style={{ padding:"0.4rem 2rem"}}>ถัดไป</SquareButton> */}
//         </div>
//         </>
//         )}
//         {step === 2 && <><div className="head-form mb-1">ช่องทางการแจ้งเตือน</div><div className="d-flex flex-row justify-content-between">Test</div></>}
//       </form>
