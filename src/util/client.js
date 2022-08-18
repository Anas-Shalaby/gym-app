import sanityClient from "@sanity/client";
// import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: `q1ywcqqy`,
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: true,

  token:
    " skG2TPjFg7cAAItfIwgIuvucOBfJ4ZSTkq2nttcSM05bSsZHnw27Y7exloN8JXeGpQhpKD9vuSS9K6jnA3Pp36VsXgH4YXbyQM28Uvf1hSqamBwkP3T9EWCTEpbFEQBrrc5UttfMgQOvmIzgHFxj3r8ZfmTa3RFXOAeC2hXLpkgRNoGZeHE1",
  ignoreBrowserTokenWarning: true,
});

// const builder = ImageUrlBuilder(client);

// const urlFor = (source) => builder.image(source);
