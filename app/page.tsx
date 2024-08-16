"use client";

import Hero from "@/components/Hero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import LandingPage from "@/components/AppLandingPage";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function ComingSoon() {
  return <Hero />;
}
