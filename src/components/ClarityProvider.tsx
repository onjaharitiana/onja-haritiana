"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityProvider() {
  useEffect(() => {
    const CLARITY_PROJECT_ID = process.env.CLARITY_PROJECT_ID;
    if (!CLARITY_PROJECT_ID) {
      console.error("CLARITY_PROJECT_ID is not defined");
      return;
    }
    Clarity.init(CLARITY_PROJECT_ID);
  }, []);

  return null;
}
