import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/heroSection";
import { MoreServices } from "@/components/moreServices";
import { FreshMart } from "@/components/freshMart";
import { FindUs } from "@/components/findUs";
import { OurPartner } from "@/components/ourPartner";
import { StillHaveQuestion } from "@/components/stillHaveQuestion";
import { GetTheApp } from "@/components/getTheApp";
import { ForBusiness } from "@/components/forBusiness";
import { Footer } from "@/components/footer";
import { GotQuestions } from "@/components/gotQuestion";
import Head from "next/head";
import { createClient } from "contentful";
import { GetStaticProps } from "next";
import Meta from "@/components/metaData";
import { useEffect } from "react";

export const getStaticProps: GetStaticProps<{
  services: any;
}> = async () => {
  const client = createClient({
    space: process.env.contentfulSpaceId || "",
    accessToken: process.env.contentfulAccessToken || "",
  });

  const websiteLogosData = await client.getEntries({
    content_type: "websiteLogos",
  });
  const navLinksData = await client.getEntries({
    content_type: "navLinks",
  });
  const heroSectionData = await client.getEntries({
    content_type: "heroSection",
  });
  const servicesData = await client.getEntries({
    content_type: "services",
  });
  const freshMartSectionData = await client.getEntries({
    content_type: "freshMartSection",
  });
  const findUsSectionData = await client.getEntries({
    content_type: "findUsSection",
  });
  const ourPartnersSectionData = await client.getEntries({
    content_type: "ourPartners",
  });
  const partnerBrandsData = await client.getEntries({
    content_type: "partnerBrands",
  });
  const GotQuestionsData = await client.getEntries({
    content_type: "gotQuestions",
  });
  const faqsData = await client.getEntries({
    content_type: "faqs",
  });
  const stillHaveQuestionsSectionData = await client.getEntries({
    content_type: "stillHaveQuestions",
  });
  const contactsData = await client.getEntries({
    content_type: "contacts",
  });
  const getTheAppSectionData = await client.getEntries({
    content_type: "getTheApp",
  });
  const forBusinessSectionData = await client.getEntries({
    content_type: "forBusiness",
  });
  const copyrightData = await client.getEntries({
    content_type: "copyright",
  });
  const seoData = await client.getEntries({
    content_type: "seo",
  });
  const footerData = await client.getEntries({
    content_type: "footer",
  });

  const websiteLogos = websiteLogosData.items;
  const navLinks = navLinksData.items;
  const hero = heroSectionData.items;
  const services = servicesData.items;
  const freshMartSection = freshMartSectionData.items;
  const findUsSection = findUsSectionData.items;
  const ourPartnersSection = ourPartnersSectionData.items;
  const partnerBrands = partnerBrandsData.items;
  const GotQuestionsSection = GotQuestionsData.items;
  const faqs = faqsData.items;
  const stillHaveQuestionsSection = stillHaveQuestionsSectionData.items;
  const contacts = contactsData.items;
  const getTheAppSection = getTheAppSectionData.items;
  const forBusinessSection = forBusinessSectionData.items;
  const copyright = copyrightData.items;
  const seo = seoData.items;
  const footer = footerData.items;

  return {
    props: {
      websiteLogos,
      navLinks,
      hero,
      services,
      freshMartSection,
      findUsSection,
      ourPartnersSection,
      partnerBrands,
      GotQuestionsSection,
      faqs,
      stillHaveQuestionsSection,
      contacts,
      getTheAppSection,
      forBusinessSection,
      copyright,
      seo,
      footer,
    },
  };
};

export default function Home({
  websiteLogos,
  navLinks,
  hero,
  services,
  freshMartSection,
  findUsSection,
  ourPartnersSection,
  partnerBrands,
  GotQuestionsSection,
  faqs,
  stillHaveQuestionsSection,
  contacts,
  getTheAppSection,
  forBusinessSection,
  copyright,
  seo,
  footer,
}: any) {
  useEffect(() => {
    console.log(footer);
  });
  return (
    <>
      <Meta seo={seo[0].fields} />
      <Navbar navData={navLinks} websiteLogos={websiteLogos[0].fields} />
      <HeroSection heroData={hero[0].fields} />
      <MoreServices services={services} />
      <FreshMart freshMartImage={freshMartSection[0].fields} />
      <FindUs findUsSection={findUsSection[0].fields} />
      <OurPartner
        ourPartnersSection={ourPartnersSection[0].fields}
        partnerBrands={partnerBrands}
      />
      <GotQuestions
        GotQuestionsSection={GotQuestionsSection[0].fields}
        faqs={faqs}
      />
      <StillHaveQuestion
        stillHaveQuestionsSection={stillHaveQuestionsSection[0].fields}
        contacts={contacts}
      />
      <GetTheApp getTheAppSection={getTheAppSection[0].fields} />
      <ForBusiness forBusiness={forBusinessSection[0].fields} />
      <Footer
        footerSeviceArea={footerSeviceArea}
        footerAbout={footerAbout}
        footerHelp={footerHelp}
        websiteLogos={websiteLogos[0].fields}
        copyright={copyright[0].fields}
        footer={footer}
      />
    </>
  );
}
