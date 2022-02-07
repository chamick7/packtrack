import React , { FC , InputHTMLAttributes } from 'react'
import "./square-input.scss"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const SquareInput: React.FC<Props> = ({label , ...otherProps }) => {
    return (
        <div className='flex flex-col justify-center w-full h-full'>
        <label className='inline font-[kanit] text-[16px] font-thin pl-4 translate-y-3.5 md:text-[20px]'><span className="bg-white rounded px-1 py-0">{label}</span></label>
        <input {...otherProps} className="form-control shadow-none square-input"/>
        </div>
    )
}

export default SquareInput
