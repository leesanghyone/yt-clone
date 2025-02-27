import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const UserIcon = ({ size = "sm" }) => {
  return (
    <Avatar
      className={`w-[25px] h-[26px] ${size === "lg" && "w-[56px] h-[56px]"}`}
    >
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default UserIcon;
