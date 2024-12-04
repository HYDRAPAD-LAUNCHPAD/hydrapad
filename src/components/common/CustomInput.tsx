import React from "react";
import { Input, InputProps } from "@material-tailwind/react";
import clsx from "clsx";

interface PropsType extends Omit<InputProps, 'ref'> {
  className?: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, PropsType>(({ className, ...props }, ref) => {
  return (
    <Input 
      ref={ref}
      crossOrigin={'false'} 
      labelProps={{ className: "content-none" }} 
      containerProps={{ className }} 
      className={clsx("placeholder:opacity-50 text-gray-500 border-none mb-3")} 
      style={{ backgroundColor: "#211E2C" }} 
      {...props} 
    />
  )
});

export default CustomInput;