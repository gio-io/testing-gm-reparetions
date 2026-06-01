import type { Metadata, Viewport } from "next";
import { Outfit, Work_Sans } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";
import CookieBanner from "@/components/CookieBanner";
import FAQSchemaScript from "@/components/FAQSchemaScript";
import ReviewSchemaScript from "@/components/ReviewSchemaScript";

// Self-hosted via next/font — no Google Fonts CDN request at runtime (GDPR-safe)
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-work-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE.metaTitle,
  description: SITE.metaDescription,
  metadataBase: new URL(SITE.url),
  alternates: { canonical: "/" },
  keywords: [
    "reparación electrodomésticos Valladolid",
    "servicio técnico electrodomésticos Valladolid",
    "reparación lavadoras Valladolid",
    "reparación frigorífico Valladolid",
    "reparación lavavajillas Valladolid",
    "reparación horno Valladolid",
    "reparación aire acondicionado Valladolid",
    "reparación vitrocerámica Valladolid",
    "reparación calentador Valladolid",
    "técnico electrodomésticos Valladolid",
    "G&M Reparaciones",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE.url,
    siteName: SITE.name,
    title: SITE.metaTitle,
    description: SITE.metaDescription,
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: "G&M Reparaciones — Servicio técnico electrodomésticos Valladolid",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.metaTitle,
    description: SITE.metaDescription,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  other: {
    "geo.region": "ES-VA",
    "geo.placename": "Valladolid",
    "geo.position": "41.6528;-4.7286",
    "ICBM": "41.6528, -4.7286",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  name: SITE.name,
  description:
    "Servicio técnico de reparación de electrodomésticos en Valladolid. Lavadoras, frigoríficos, hornos, lavavajillas, vitrocerámicas, campanas extractoras, calentadores y aires acondicionados. Presupuesto sin compromiso.",
  url: SITE.url,
  telephone: SITE.phone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.direccion,
    addressLocality: SITE.localidad,
    addressRegion: "Castilla y León",
    postalCode: SITE.codigoPostal,
    addressCountry: "ES",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.6528,
    longitude: -4.7286,
  },
  areaServed: [
    { "@type": "City", name: "Valladolid" },
    { "@type": "City", name: "Laguna de Duero" },
    { "@type": "City", name: "Arroyo de la Encomienda" },
    { "@type": "City", name: "Medina del Campo" },
    { "@type": "City", name: "Tudela de Duero" },
    { "@type": "City", name: "Simancas" },
    { "@type": "City", name: "Cigales" },
    { "@type": "City", name: "Tordesillas" },
    { "@type": "City", name: "Olmedo" },
    { "@type": "City", name: "Peñafiel" },
    { "@type": "City", name: "Boecillo" },
    { "@type": "City", name: "Aldeamayor de San Martín" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: SITE.horaApertura,
      closes: SITE.horaCierre,
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de reparación de electrodomésticos",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de lavadoras en Valladolid" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de frigoríficos en Valladolid" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de hornos en Valladolid" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de lavavajillas en Valladolid" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de vitrocerámicas en Valladolid" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de campanas extractoras en Valladolid" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de calentadores y termos en Valladolid" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Reparación de aires acondicionados en Valladolid" } },
    ],
  },
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Efectivo, Tarjeta de crédito, Transferencia bancaria",
  image: `${SITE.url}/assets/logo.jpg`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${outfit.variable} ${workSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <FAQSchemaScript />
        <ReviewSchemaScript />
      </head>
      <body className="font-body bg-gm-black text-white antialiased">
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
