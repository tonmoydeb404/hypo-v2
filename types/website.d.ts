import { AssetType, LinkType, SectionHeaderType, SEOType } from "./hygraph";

export type WebsiteType = {
  title: string;
  description: string;
  logoText: string;
  logo: AssetType;
  heroSection: SectionHeaderType;
  featuresSection: SectionHeaderType;
  servicesSection: SectionHeaderType;
  teamsSection: SectionHeaderType;
  worksSection: SectionHeaderType;
  reviewsSection: SectionHeaderType;
  pricingSection: SectionHeaderType;
  faqSection: SectionHeaderType;
  footerSection: SectionHeaderType;
  footerLinks: LinkType[];
  navigationLinks: LinkType[];
  primaryLink: LinkType;
  secondaryLink: LinkType;
  seo: SEOType;
};
