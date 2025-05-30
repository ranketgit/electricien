export function generateSchema(
    title: string,
    description: string,
    ratingCount: number = 27,
  ) {
    return {
      "@context": "http://schema.org",
      "@type": "Product",
      name: `${title}`,
      brand: "Elec Express",
      image: "https://elec-express.be/elec-express-votre-solution-electrique-immediate.webp",
      description: `${description}`,
      sku: "0476232323",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "9.9",
        ratingCount: `${ratingCount}`,
        bestRating: "10",
        worstRating: "1",
      },
      offers: {
        "@type": "aggregateOffer",
        availability: "http://schema.org/InStock",
        priceCurrency: "EUR",
        lowPrice: "159",
        offerCount: "212",
        highPrice: "636",
      },
    };
  }