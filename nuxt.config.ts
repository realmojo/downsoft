const title = "다운팡 - 당신이 필요한 앱을 모두 한 곳에";
const description =
  "다운팡에서 혁신적인 경험을 즐겨보세요! 더 빠르고 더 스마트한 미래를 만나는 첫걸음, 당신의 일상을 풍부하게 만들어줄 앱을 지금 다운로드하세요.";
const logo = "https://downpang.com/downsoft-logo.png";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/style.css", "~/assets/css/mobile.css"],
  plugins: ["@/plugins/antd", "@/plugins/gtag"],
  app: {
    head: {
      htmlAttrs: { lang: "ko" },
      title: title,
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      script: [
        // {
        //   src: "https://t1.kakaocdn.net/kakao_js_sdk/v1/kakao.min.js",
        // },
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9130836798889522",
          crossorigin: "anonymous",
          async: true,
        },
        {
          src: "//wcs.naver.net/wcslog.js",
          type: "text/javascript",
        },
        {
          innerHTML:
            'if(!wcs_add) var wcs_add = {}; wcs_add["wa"] = "16cdf8d64fd8bf0"; if(window.wcs) {wcs_do();}',
          type: "text/javascript",
        },
        {
          innerHTML:
            '(function (c, l, a, r, i, t, y) { c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); }; t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i + "?ref=bwt"; y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y); })(window, document, "clarity", "script", "l4snelxyjb");',
          type: "text/javascript",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://downpang.com",
        },
      ],
      meta: [
        {
          name: "naver-site-verification",
          content: "4eebc540aeaa00ac14e86236ce8af63ef9cd8592",
        },
        {
          name: "google-site-verification",
          content: "p5pjvv5CLGT1lB3oxHf4xzaGf6S1rDxKOkvPQ3uYM48",
        },
        {
          name: "robots",
          content: "index, follow",
        },
        {
          name: "theme-color",
          content: "#E5BA73",
        },
        {
          name: "description",
          content: description,
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:url",
          content: "https://downpang.com",
        },
        {
          name: "og:article:author",
          content: "downpang",
        },
        {
          name: "og:site_name",
          content: "다운팡",
        },
        {
          name: "og:title",
          content: title,
        },
        {
          name: "og:image",
          content: logo,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:site",
          content: "@downpang.com",
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: logo,
        },
        {
          name: "apple-touch-icon",
          content: logo,
        },
      ],
    },
  },
});
