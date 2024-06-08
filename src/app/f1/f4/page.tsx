import Link from "next/link";
import React from "react";

export default function F4() {
  return (
    <>
      <h1>F4 Page</h1>
      <div className="flex flex-col gap-2">
        <Link className="text-blue-500" href="/f1/f3">F3</Link>
        <Link className="text-blue-500" href="/about">About</Link>
      </div>
    </>
  );
}
