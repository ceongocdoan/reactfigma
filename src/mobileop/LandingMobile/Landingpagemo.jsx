import * as React from "react";
import { HeroSectionmo } from "./HeroSectionmo";
import { CalltoAction } from "./CalltoAction";
import { FeatureImage } from "./FeatureImage";

export function Landingpagemo() {
  return (
    // <main className="flex overflow-hidden flex-col justify-center py-16 bg-white max-w-[375px]">
      <section className="flex overflow-hidden flex-col mx-auto w-full py-16 bg-white max-w-[644px]">
      <div className="flex flex-col pr-4 pl-4 w-full">
        <HeroSectionmo />
        <CalltoAction />
        <FeatureImage />
        </div>
      </section>
    // </main>
  );
}