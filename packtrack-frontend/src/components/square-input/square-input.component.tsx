import React , { FC , InputHTMLAttributes } from 'react'


interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const SquareInput: React.FC<Props> = ({label , ...otherProps }) => {
    return (
        <div className='flex flex-col justify-center w-full h-full'>
        <label className='inline font-[kanit] text-[16px] font-thin pl-4 translate-y-3.5 md:text-[20px]'><span className="bg-white rounded px-1 py-0">{label}</span></label>
        <input {...otherProps} className="shadow-none border-2 rounded border-main w-full py-2 px-3"/>
        </div>
    )
}

export default SquareInput
