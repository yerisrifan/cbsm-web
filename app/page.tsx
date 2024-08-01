"use client";

import Hero from "@/components/Hero";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function ComingSoon() {
  return <Hero />;
}
