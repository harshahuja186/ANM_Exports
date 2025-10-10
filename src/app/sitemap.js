// app/sitemap.js
export default function sitemap() {
  const baseUrl = "https://anm-exports.vercel.app";
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
