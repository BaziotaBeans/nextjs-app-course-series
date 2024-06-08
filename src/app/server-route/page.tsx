import React from "react";

import { serverSideFunction } from "@/utils/server-utils";
import { ImageSlider } from "@/components/image-slider";
import { clientSideFunction } from "@/utils/client-utils";



export default function ServerRoutePage() {
  const result = serverSideFunction();
  console.log("server route rendering");
  const clientResult = clientSideFunction()

  return (
    <>
      <h1>Server Route</h1>
      <p>{result}</p>
      <ImageSlider/>
    </>
  );
}
