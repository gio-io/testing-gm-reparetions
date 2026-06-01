/**
 * Server component: renders the FAQPage JSON-LD script in the initial SSR HTML.
 * Importing from lib/constants ensures the FAQ data stays in sync with the
 * client-side accordion in FAQSection.tsx (single source of truth).
 */
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQSchemaScript() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.respuesta,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
