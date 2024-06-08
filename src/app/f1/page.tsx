import Link from "next/link";
import React from "react";

export default function F1() {
  return (
    <>
      <h1>F1 Page</h1>
      <div>
        <Link className="text-blue-500" href="/f1/f2">F2</Link>
      </div>
    </>
  );
}
