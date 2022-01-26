import React , { FC , InputHTMLAttributes } from 'react'
import "./square-input.scss"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const SquareInput: React.FC<Props> = ({label , ...otherProps }) => {
    return (
        <div className='square-input-layout'>
        <label className='label'><span className="spanwhite px-1 py-0">{label}</span></label>
        <input {...otherProps} className="form-control shadow-none square-input"/>
        </div>
    )
}

export default SquareInput
