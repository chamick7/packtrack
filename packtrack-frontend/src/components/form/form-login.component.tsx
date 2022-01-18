import React, { useState } from "react";
import axiosApiInstance from "../../utils/axios";
import { useNavigate } from 'react-router-dom';

import SquareInput from "../square-input/square-input.component";
import SquareButton from "../button/square-button.component";

import "./form-login.scss";


interface Credential {
  email: string;
  password: string;
}

const FormLogin = () => {
  let navigate = useNavigate();

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
    try {
      let res = await axiosApiInstance.post("/api/auth/login", credential);
      if (res.status === 200 && res.data) {
        localStorage.setItem("user", JSON.stringify(res.data.user));
        localStorage.setItem(
          "accessToken",
          JSON.stringify(res.data.accessToken)
        );
        localStorage.setItem(
          "refreshToken",
          JSON.stringify(res.data.refreshToken)
        );
      }
      return navigate('/home');
    } catch (err) {
      alert(JSON.stringify(err));
    }
  };

  return (
    <>
    <div className="form-login-container">
      <div className="head-form mb-5">เข้าสู่ระบบ</div>
      <form onSubmit={handleSubmit} className="form-login">
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
        <div className="d-flex justify-content-end mt-4">
          <SquareButton type="submit">ยืนยัน</SquareButton>
        </div>
      </form>

    </div>
    </>
  );
};

export default FormLogin;
