import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/heroSection";
import { MoreServices } from "@/components/moreServices";
import { FreshMart } from "@/components/freshMart";
import { FindUs } from "@/components/findUs";
import { OurPartner } from "@/components/ourPartner";
import { StillHaveQuestion } from "@/components/stillHaveQuestion";
import { GetTheApp } from "@/components/getTheApp";
import { WeFresh } from "@/components/weFresh";
import { Footer } from "@/components/footer";
import { GotQuestions } from "@/components/gotQuestion";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MoreServices />
      <FreshMart />
      <FindUs />
      <OurPartner />
      <GotQuestions />
      <StillHaveQuestion />
      <GetTheApp />
      <WeFresh />
      <Footer />
    </>
  );
}
