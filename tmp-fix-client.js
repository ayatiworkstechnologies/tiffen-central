const fs = require('fs');
const path = require('path');
const files = [
  'Header.jsx',
  'homepage/FeastOfFlavours.jsx',
  'homepage/GlassMenuSection.jsx',
  'homepage/LogoStrip.jsx',
  'homepage/SouthIndianDelights.jsx',
  'homepage/TiffenHeroHotspot.jsx',
  'homepage/WelcomeSection.jsx'
].map(f => path.join('d:/Ayathiwork/2026/tiffen-central/components', f));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (content.startsWith('import Image from "next/image";\n"use client";')) {
    content = '"use client";\nimport Image from "next/image";' + content.substring('import Image from "next/image";\n"use client";'.length);
    fs.writeFileSync(f, content);
    console.log('Fixed ' + f);
  }
});
