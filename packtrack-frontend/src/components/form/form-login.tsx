import React, { useState } from "react";

import axios from "axios";

import SquareInput from "../square-input/square-input.component";
import SquareButton from "../button/square-button";

interface Credential {
  email: string;
  password: string;
}

const FormLogin = () => {
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
    try{
        let res = await axios.post("http://localhost:5000/api/auth/login" , credential)

        if (res.status === 200 && res.data){
          localStorage.setItem("user",JSON.stringify(res.data.user))
          localStorage.setItem("accessToken",JSON.stringify(res.data.accessToken))
          localStorage.setItem("refreshToken",JSON.stringify(res.data.refreshToken))
        }
    }
    catch (err){
      alert(JSON.stringify(err));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <SquareButton type="submit"
        >
          LOGIN
        </SquareButton>
      </form>
    </div>
  );
};

export default FormLogin;
