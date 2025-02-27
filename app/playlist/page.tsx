import React from "react";

const page = (props: any) => {
  return <div>Playlist{props?.searchParams?.list}</div>;
};

export default page;
