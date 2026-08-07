"use client";

import dynamic from "next/dynamic";

const NuggetScene = dynamic(() => import("./NuggetScene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div
        className="h-12 w-12 animate-pulse rounded-full"
        style={{ backgroundColor: "var(--color-accent)", opacity: 0.2 }}
      />
    </div>
  ),
});

export default function Hero3D() {
  return <NuggetScene />;
}