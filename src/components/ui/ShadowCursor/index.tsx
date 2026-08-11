"use client";

import initCursor from "@/shared/utils/useShadowCursor";
import { useEffect } from "react";

export default function ShadowCursor() {
  useEffect(() => {
    // Initialize the shadow/fluid cursor effect
    initCursor();
  }, []);

  return (
    <div
      aria-hidden="true"
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        h-screen
        w-screen
        overflow-hidden
      "
    >
      <canvas
        id="fluid"
        className="
          pointer-events-none
          block
          h-full
          w-full
        "
      />
    </div>
  );
}