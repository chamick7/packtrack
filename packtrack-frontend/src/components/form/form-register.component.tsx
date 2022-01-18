import React ,  { useState } from "react";

import axios from "axios";

import SquareInput from "../square-input/square-input.component";
import SquareButton from "../button/square-button.component";

interface Credential {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmpassword: string;
  phone: string;
}

const FormRegister = () => {
  const [credential, setCredential] = useState<Credential>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword:"",
    phone: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCredential((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("click");

  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <SquareInput
          type="text"
          name="firstname"
          onChange={handleChange}
          value={credential.firstname}
          label="ชื่อ"
        />
        <SquareInput
          type="text"
          name="lastname"
          onChange={handleChange}
          value={credential.lastname}
          label="นามสกุล"
        />
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
        <SquareInput
          type="password"
          name="password"
          onChange={handleChange}
          value={credential.confirmpassword}
          label="ยืนยันรหัสผ่าน"
        />
        <SquareInput
          type="tel"
          name="phone"
          onChange={handleChange}
          value={credential.phone}
          label="เบอร์โทรศัพท์"
        />
        <SquareButton type="submit">ถัดไป</SquareButton>
      </form>
    </div>
  );
};

export default FormRegister;
