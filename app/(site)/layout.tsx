import React from "react";
import Header from "@/components/elements/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header>{children}</Header>
    </div>
  );
};
export default layout;
