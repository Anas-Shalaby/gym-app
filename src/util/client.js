import sanityClient from "@sanity/client";
// import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "q1ywcqqy",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,
  token: process.env.REACT_APP_SANITY_TOKEN,
  ignoreBrowserTokenWarning: true,
});

// const builder = ImageUrlBuilder(client);

// const urlFor = (source) => builder.image(source);
