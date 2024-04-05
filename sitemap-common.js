const axios = require("axios");
const fs = require("fs");
const prettier = require("prettier");

// 오늘 날짜 가져오기 & 도메인 설정
const DOMAIN = "https://downpang.com";
const formatted = (sitemap) => prettier.format(sitemap, { parser: "html" });

const replaceAll = (str, searchStr, replaceStr) => {
  return str.split(searchStr).join(replaceStr);
};

(async () => {
  const { data } = await axios.get("https://api.downpang.com/api/getItems.php");
  const pagesSitemap = `${data.map((item) => {
    return `<url>
            <loc>${DOMAIN}/${item.category}/${item.slug}</loc>
            <lastmod>${item.updated}</lastmod>
          </url>
          `;
  })}`;

  const generatedSitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
     xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      <url>
        <loc>${DOMAIN}</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>always</changefreq>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${DOMAIN}/game</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>always</changefreq>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${DOMAIN}/security</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>always</changefreq>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${DOMAIN}/development</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>always</changefreq>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>${DOMAIN}/browser</loc>
        <lastmod>2024-01-01</lastmod>
        <changefreq>always</changefreq>
        <priority>1.00</priority>
      </url>
      ${replaceAll(pagesSitemap, ",", "")}
    </urlset>`;

  const formattedSitemap = [formatted(generatedSitemap)];
  fs.writeFileSync("./public/sitemap.xml", formattedSitemap[0], "utf8");
})();
