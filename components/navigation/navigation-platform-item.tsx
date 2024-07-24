import React from "react";
import Link from "next/link";

interface NavigationItemProps {
  isActive: boolean;
  href: string;
  icon?: React.ReactNode;
  logo?: string;
  color: string;
  onClick: () => void;
}

const NavigationPlatformItem = ({
  isActive,
  href,
  icon,
  logo,
  color,
  onClick,
}: NavigationItemProps) => {
  return (
    <Link href={href}>
      <div className="w-20 h-10 flex mb-8" onClick={onClick}>
        <div
          className="w-1 h-14 rounded-r-full"
          style={{ backgroundColor: isActive ? color : "transparent" }}
        ></div>
        <div className="w-14 h-14 rounded-full ml-2 cursor-pointer bg-gray-900 grid place-items-center hover:bg-gray-600 transition-colors duration-300">
          {icon ? (
            <div className="text-white w-11 h-11">{icon}</div>
          ) : (
            <img
              src={logo}
              alt={href}
              className="rounded-full w-14 h-14 object-cover"
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default NavigationPlatformItem;
