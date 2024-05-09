'use client';
import { CustomButtonProps } from '../../types';
export default function CustomButton({title, buttonStyle, handleClick}: CustomButtonProps) {
  return (
    <div>
        <button className={`${buttonStyle}`}
        onClick={handleClick}>{title}</button>
    </div>
  )
}
