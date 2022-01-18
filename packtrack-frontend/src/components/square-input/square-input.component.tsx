import React , { FC , InputHTMLAttributes } from 'react'
import "./square-input.scss"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const SquareInput: React.FC<Props> = ({label , ...otherProps }) => {
    return (
        <div className='square-input-layout'>
        <label>{label}</label>
        <input {...otherProps} className="square-input"/>
        </div>
    )
}

export default SquareInput