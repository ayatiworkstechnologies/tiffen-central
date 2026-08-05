import { DATA } from "../content/data";
import { siteUrl, seo } from "./seo-config";

export function generateLlmsTxt() {
  const { site, sections, menu } = DATA;
  const hoursText = site.hours
    .map((h) => `- ${h.label}: ${h.value}`)
    .join("\n");

  const address = [...site.contact.addressLines, site.contact.cityRegion].join(", ");

  const menuCategories = menu.categories
    .map((cat) => `- **${cat.title}**: ${cat.items.join(", ")}`)
    .join("\n");

  return `# ${site.brand.name}

> ${site.brand.tagline}

${sections.about.body}

## Location & Contact
- **Address**: ${address}
- **Phone**: ${site.contact.phone}
- **Email**: ${site.contact.email}
- **Instagram**: ${site.contact.socials.instagram}

## Opening Hours
${hoursText}

## Menu Summary
${menuCategories}

## Key Services
- **Dine-in & Takeaway**: Traditional South Indian breakfast, snacks, tiffins & filter coffee in Perungudi, Chennai.
- **Catering Services**: Catering for private parties, corporate events, and family functions.
- **Table Booking**: Enquiries accepted via phone (${site.contact.phone}) or online contact form.

## AI & Developer Links
- [Full LLM Context Sheet](${siteUrl}/llms-full.txt): Complete detailed website text for AI model context windows.
- [Website Home Page](${siteUrl}/): Official website of Tiffen Central.
`;
}

export function generateLlmsFullTxt() {
  const { site, sections, menu } = DATA;
  const hoursText = site.hours
    .map((h) => `- ${h.label}: ${h.value}`)
    .join("\n");

  const address = [...site.contact.addressLines, site.contact.cityRegion].join(", ");

  const fullMenuText = menu.categories
    .map((cat) => {
      const itemList = cat.items.map((item) => `  - ${item}`).join("\n");
      return `### ${cat.title}\n${itemList}`;
    })
    .join("\n\n");

  return `# ${site.brand.name} - Complete AI Context Document

> ${seo.description}

## Overview
${sections.hero.subtitle}

${sections.about.body}

## Operating Hours
${hoursText}

## Address & Contact Information
- **Brand**: ${site.brand.name}
- **Address**: ${address}
- **Phone**: ${site.contact.phone}
- **Email**: ${site.contact.email}
- **Social Media**: ${site.contact.socials.instagram}

## Complete Food & Beverage Menu

${fullMenuText}

## Catering Services
${sections.catering.titleLine1} ${sections.catering.titleLine2}
${sections.catering.body}

For catering reservations and custom package quotes, contact ${site.contact.email} or call ${site.contact.phone}.

## Primary Keywords & Business Classification
- Category: South Indian Restaurant, Vegetarian Restaurant, Tiffin Center, Cafe
- Location: Perungudi, Chennai, Tamil Nadu, India
- Signature Items: Ghee Dosa, Benne Dosa, Medhu Vada, Ghee Pongal, Filter Coffee, Sambar Idly
`;
}
