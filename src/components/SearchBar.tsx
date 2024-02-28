import React from "react";
import { IoSearchSharp } from "react-icons/io5";

type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <div
      className="min-w-[300px] w-[500px] rounded-md flex
      items-center gap-2 px-2 py-2 border-2 border-gray-600 
    hover:border-gray-200">
      <IoSearchSharp />
      <input
        ////// non capisco perchè bisogna assegnare value a value e onChange a onChange
        value={value}
        onChange={onChange}
        type="text"
        className=" bg-inherit w-full outline-none"
      />
    </div>
  );
}
