import { type SchemaObject } from "./types";

export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * FAQPage schema — sekcja FAQ na końcu cluster page.
 * Premia GEO 2026: Google AI Overviews priorytet (po HowTo schema).
 * Triple stack (Article + ItemList + FAQPage) = 1.8x cytowań.
 */
export function faqPageSchema(faqs: FaqItem[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}
