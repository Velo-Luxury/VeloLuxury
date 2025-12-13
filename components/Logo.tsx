import React from "react";
// import logo from "../logo.png";


interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-24", // Example width for small
    md: "w-32", // Example width for medium
    lg: "w-40", // Example width for large
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Velo Car Rental"
        className={`${sizeClasses[size]}`}
      />
    </div>
  );
};
