/**
 * Server component: renders the Review/LocalBusiness JSON-LD script in the
 * initial SSR HTML. The same TESTIMONIOS data drives the client-side cards
 * in TestimoniosSection.tsx (single source of truth).
 */
import { TESTIMONIOS } from "@/lib/constants";

export default function ReviewSchemaScript() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "G&M Reparaciones",
    review: TESTIMONIOS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.nombre },
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.valoracion,
        bestRating: 5,
      },
      reviewBody: t.texto,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
