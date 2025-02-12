"use client";

import dynamic from "next/dynamic";

const DynamicComponentWithNoSSR = dynamic(() => import("./MainComponent"), {
  ssr: false,
});

function Home() {
  return (
    <>
      <DynamicComponentWithNoSSR />
    </>
  );
}

export default Home;
