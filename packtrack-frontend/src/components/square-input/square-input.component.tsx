import React, { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  signature: string;
  register: UseFormRegister<any>;
}

const SquareInput: React.FC<Props> = ({
  label,
  register,
  signature,
  ...otherProps
}) => {
  return (
    <div className="flex flex-col justify-center w-full h-full">
      <label className="inline font-[kanit] text-[16px] font-thin pl-4 translate-y-3.5 md:text-[20px]">
        <span className="bg-white rounded px-1 py-0">{label}</span>
      </label>
      <input
        {...register(signature)}
        {...otherProps}
        className="shadow-none border-2 rounded border-main w-full py-2 px-3"
      />
    </div>
  );
};

export default SquareInput;
