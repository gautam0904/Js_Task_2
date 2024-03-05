import React from "react";

const sizeClasses = {
  txtRobotoRomanMedium24: "font-medium font-roboto",
  txtRobotoRomanRegular16WhiteA700: "font-normal font-roboto",
  txtRobotoRomanMedium32: "font-medium font-roboto",
  txtRobotoRomanMedium32Amber400: "font-medium font-roboto",
  txtInterMedium22: "font-inter font-medium",
  txtRobotoRomanRegular16: "font-normal font-roboto",
  txtRobotoRomanMedium16Black900: "font-medium font-roboto",
  txtInterMedium20: "font-inter font-medium",
  txtRobotoRomanSemiBold15: "font-roboto font-semibold",
  txtRobotoRomanRegular32: "font-normal font-roboto",
  txtRobotoRomanMedium18: "font-medium font-roboto",
  txtRobotoRomanMedium16: "font-medium font-roboto",
  txtRobotoRomanRegular14: "font-normal font-roboto",
  txtRobotoRomanRegular24: "font-normal font-roboto",
  txtRobotoRomanRegular32AmberA200: "font-normal font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
