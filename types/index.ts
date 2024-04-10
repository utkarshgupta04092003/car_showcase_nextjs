import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: String;
    buttonStyle?: String;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}