"use client";
/* eslint-disable */

import { useState } from "react";
import { HexagramDisplay } from "@/components/HexagramDisplay";
import { Sidebar } from "@/components/Sidebar";
import { Hexagram } from "@/lib/types";

export function Divination({ hexagrams }: { hexagrams: Hexagram[] }) {
  const [currentHexagram, setCurrentHexagram] = useState<Hexagram | null>(null);

  const generateHexagram = (request: string) => {
    const randomIndex = Math.floor(Math.random() * hexagrams.length);
    setCurrentHexagram(hexagrams[randomIndex]);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-1/4 flex items-stretch">
        <Sidebar currentHexagram={currentHexagram} onGenerateHexagram={generateHexagram} />
      </div>
      <div className="w-full md:w-3/4 p-4 flex items-center justify-center">
        <HexagramDisplay binary={currentHexagram?.binary || "000000"} />
      </div>
    </div>
  );
}
