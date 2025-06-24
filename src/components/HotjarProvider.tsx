import Hotjar from "@hotjar/browser";
import { useEffect } from "react";

const HOTJAR_SITE_ID = process.env.HOTJAR_SITE_ID;
const HOTJAR_VERSION = process.env.HOTJAR_VERSION;

export default function HotjarProvider() {
  useEffect(() => {
    if (!HOTJAR_SITE_ID || !HOTJAR_VERSION) {
      console.error("HOTJAR_SITE_ID or HOTJAR_VERSION is not defined");
      return;
    }
    Hotjar.init(Number(HOTJAR_SITE_ID), Number(HOTJAR_VERSION));
  }, []);
  return null;
}
