const description =
  "Smol print on demand tshirt shop featuring cool modern designs.";
const title = "ShirtsNStuff";
const url = "https://shirtsnstuff.netlify.app/";

const seo = {
  title,
  titleTemplate: "%s | Headless Dropshipping Starter",
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
