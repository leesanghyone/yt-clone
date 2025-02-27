"use client";
import React from "react";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import IconButton from "./IconButton";
import { IoClose } from "react-icons/io5";

const Logo = ({ isInDrawer = false, onClickClose = () => {} }) => {
  const { push } = useRouter(); // pagerouter의 userouter를 사용해야 됨.

  const onClickLogo = () => {
    // homne으로 이동하는 로직.

    push("/");
  };

  const onClickMenu = () => {};

  return (
    <section className="flex items-center gap-3">
      {isInDrawer ? (
        <IconButton icon={<IoClose size={30} />} onClickIcon={onClickClose} />
      ) : (
        <IconButton
          icon={<RxHamburgerMenu size={24} />}
          onClickIcon={onClickMenu}
        />
      )}

      <div className="cursor-pointer" onClick={onClickLogo}>
        <Image src={"/main-logo.svg"} alt="logo" width={100} height={20} />
      </div>
    </section>
  );
};

export default Logo;
