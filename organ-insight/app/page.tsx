"use client";

import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animaton";

export default function Home() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-xl font-bold text-black dark:text-white">
              Unveiling the Depths of Medical Imaging with AI
              <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                OrganInsight
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={`/Medical-Imaging.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
