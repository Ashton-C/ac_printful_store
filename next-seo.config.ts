const description =
  "Smol print on demand tshirt shop featuring cool modern designs.";
const title = "zhirtz.store";
const url = "https://zhirtz.store/";

const seo = {
  title,
  titleTemplate: "%s | Printful Custom T-Shirt Website",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "@_Ashton_C",
    site: "@_Ashton_C",
  },
};

export { seo as defaultSEO, url as defaultUrl };
