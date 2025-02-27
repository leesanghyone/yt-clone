"use client";
import React, { useEffect, useReducer, useRef, useState } from "react";
import Image from "next/image";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
import { FaChromecast } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "./Logo";
import Navigation from "./Navigator";
import useUIState from "@/hooks/useUIState";

const HeaderDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // open이라는 속성은 창을열지 말지 정하는 중요한 녀석이다.
    <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>{children}</DrawerTrigger>
      <DrawerContent className="w-[240px] h-full">
        {/* 로고 */}
        <div className="py-3">
          <div className="px-3">
            <Logo
              isInDrawer={true}
              onClickClose={() => {
                setIsOpen(false);
              }}
            />
          </div>
        </div>
        {/* 네비게이션 + 재생목록 */}
        <Navigation />
      </DrawerContent>
    </Drawer>
  );
};

const Header = ({ children }: { children: React.ReactNode }) => {
  const { headerImageSrc } = useUIState();
  const [isScrolled, setIsScrolled] = useState(false);

  const headRef = useRef<HTMLElement>(null);

  // // 2. 간단한 함수로 구현
  // htmlelement는 첫번째 인자값의 타입을 설정해주는 역할을 한다.
  // 처음시작은 NULL 이지만 ,  header쪽에 ref로 연결되면 후에 값이 바뀐다.
  // function createRef<T>(initialValue: T | null): MyRef<T> {
  //   return { current: initialValue };
  // }

  useEffect(() => {
    const handleScroll = () => {
      const scrollValue = headRef?.current?.scrollTop;
      console.log(">scrollVallue", scrollValue);
      setIsScrolled(scrollValue !== 0);
    };
    headRef?.current?.addEventListener("scroll", handleScroll);
    return () => {
      headRef?.current?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header ref={headRef} className="relative overflow-y-auto w-full h-full">
      <section className="absolute w-full top-0">
        {/* bgSection */}
        <div className="relative top-0 h-[400px] w-full">
          <Image
            alt="mediaItem"
            className="object-cover"
            fill
            src={
              headerImageSrc ||
              "https://images.unsplash.com/photo-1707833558984-3293e794031c"
            }
          />
        </div>
        <div className="absolute top-0 h-[400px] bg-black opacity-40 w-full"></div>
        <div className="absolute top-0 h-[400px] bg-gradient-to-t from-black w-full"></div>
      </section>
      {/* search section */}
      <section
        className={`sticky top-0 left-0 z-10 ${isScrolled && "bg-black"}`}
      >
        <PagePadding>
          <div className="h-[64px] flex flex-row justify-between items-center">
            <article
              className="h-[42px] min-w-[480px] hidden lg:flex flex-row items-center
            bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500"
            >
              <div>
                <FiSearch size={24} />
              </div>
              <input
                className="h-full w-full bg-transparent"
                placeholder="노래,앨범, 아티스트, 팟캐스트 검색"
                type="text"
              />
            </article>
            <HeaderDrawer>
              <article className="lg:hidden">
                <Logo />
              </article>
            </HeaderDrawer>

            <article className="flex flex-row gap-6 items-center">
              <FaChromecast size={26} />
              <UserIcon />
            </article>
          </div>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default Header;
