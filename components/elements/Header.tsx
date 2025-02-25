import React from "react";
import Image from "next/image";
const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <header className="relative">
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
      <section className="absolute">{children}</section>
    </header>
  );
};

export default Header;
