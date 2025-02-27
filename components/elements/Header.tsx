import React from "react";
import Image from "next/image";
import UserIcon from "@/components/UserIcon";
import PagePadding from "@/components/PagePadding";
import { FaChromecast } from "react-icons/fa6";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="relative overflow-y-auto w-full h-full">
      <section className="absolute w-full">
        {/* bgSection */}
        <div className="relative top-0 h-[400px] w-full">
          <Image
            alt="mediaItem"
            className="object-cover"
            fill
            src="https://images.unsplash.com/photo-1707833558984-3293e794031c"
          />
        </div>
      </section>
      {/* search section */}
      <section className="sticky">
        <PagePadding>
          searchSection
          <article>
            <FaChromecast size={26} />
            <UserIcon />
          </article>
        </PagePadding>
      </section>
      <section className="relative">{children}</section>
    </header>
  );
};

export default Header;
