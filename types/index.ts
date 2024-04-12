import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title: String;
    buttonStyle?: String;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Data {
    // Define properties of your object here
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  }

  
export interface ModalProps{
    data: any,
    onClick: any;
}

export interface FiltersProps {
    filterType: string;
    options: String[]; // or specific type for options array
    setFilter:any;
}

export interface CarCardProps{
    data: any,
    index: number, 
    onClick: any

}

export interface CarContainerProps{
    data: Data[] | null;
    handleLoadMore: ()=>void
}