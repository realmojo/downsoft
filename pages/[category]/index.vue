<template>
  <main class="soft-layout column pt-8">
    <Breadcrumb :category="category" class="pt-4 mb-4" />

    <a-row>
      <a-col :xs="24" :sm="24" :md="16" :lg="16" class="aside">
        <AdsenseSearch />
        <h2 class="pt-8">추천 앱</h2>
        <a-row :gutter="[16, 16]">
          <a-col v-for="item in rItems" :key="item.title" :xs="24" :md="12">
            <NuxtLink :to="`/${item.category}/${item.slug}`">
              <a-card hoverable>
                <a-card-meta
                  :title="item.title"
                  :description="item.description"
                >
                  <template #avatar>
                    <a-avatar
                      :src="item.logo"
                      :alt="item.title"
                      style="width: 80px; height: 80px"
                    />
                  </template>
                </a-card-meta>
              </a-card>
            </NuxtLink>
          </a-col>
        </a-row>
        <h2 class="pt-8">새로운 앱</h2>
        <a-row :gutter="[16, 16]">
          <a-col v-for="item in nItems" :key="item.title" :xs="24" :md="12">
            <NuxtLink :to="`/${item.category}/${item.slug}`">
              <a-card hoverable>
                <a-card-meta
                  :title="item.title"
                  :description="item.description"
                >
                  <template #avatar>
                    <a-avatar
                      :src="item.logo"
                      :alt="item.title"
                      style="width: 80px; height: 80px"
                    />
                  </template>
                </a-card-meta>
              </a-card>
            </NuxtLink>
          </a-col>
        </a-row>
      </a-col>
      <a-col :xs="24" :sm="24" :md="8" :lg="8" class="aside pl-4">
        <h2>가장 많이 다운로드</h2>
        <a-list :data-source="dItems">
          <template #renderItem="{ item }">
            <NuxtLink :to="`/${item.category}/${item.slug}`">
              <a-list-item>
                <a-list-item-meta
                  :description="item.description"
                  class="description-ellipse"
                >
                  <template #title>
                    {{ item.title }}
                  </template>
                  <template #avatar>
                    <a-avatar
                      :src="item.logo"
                      :alt="item.title"
                      style="width: 40px; height: 40px"
                    />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </NuxtLink>
          </template>
        </a-list>
      </a-col>
    </a-row>
  </main>
</template>

<script setup>
import categoryCode from "assets/js/categoryCode.json";
const route = useRoute();
const category = route.params.category;

let url = `https://api.getsoftbox.com/api/getItemsByRecommend.php?category=${category}&limit=6`;
let { data: recommendItem } = await useFetch(url, {
  key: "recommendItems",
  method: "get",
});
const rItems = JSON.parse(recommendItem._rawValue);

url = `https://api.getsoftbox.com/api/getItemsByCategory.php?category=${category}&limit=6`;
let { data: newItems } = await useFetch(url, {
  key: "newItems",
  method: "get",
});
const nItems = JSON.parse(newItems._rawValue);

url = `https://api.getsoftbox.com/api/getItemsByDownload.php?category=${category}&limit=6`;
let { data: downloadItems } = await useFetch(url, {
  key: "downloadItems",
  method: "get",
});
const dItems = JSON.parse(downloadItems._rawValue);
const metaUrl = `https://getsoftbox.com${route.path}`;
const metaTitle = `${categoryCode[category]} 카테고리 - 다운소프트`;
const meataDescription = `다운소프트에서 혁신적인 경험을 즐겨보세요! ${categoryCode[category]} 카테고리 더 빠르고 더 스마트한 미래를 만나는 첫걸음, 당신의 일상을 풍부하게 만들어줄 앱을 지금 다운로드하세요.`;
const logo = "https://getsoftbox.com/downsoft-logo.png";
useHead({
  title: metaTitle,
  link: [
    {
      rel: "canonical",
      href: metaUrl,
    },
  ],
  meta: [
    {
      name: "description",
      content: meataDescription,
    },
    {
      name: "og:type",
      content: "website",
    },
    {
      name: "og:url",
      content: metaUrl,
    },
    {
      name: "og:article:author",
      content: "Downsoft",
    },
    {
      name: "og:site_name",
      content: "Downsoft",
    },
    {
      name: "og:title",
      content: metaTitle,
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
      content: "@getsoftbox.com",
    },
    {
      name: "twitter:title",
      content: metaTitle,
    },
    {
      name: "twitter:description",
      content: meataDescription,
    },
    {
      name: "twitter:image",
      content: logo,
    },
    {
      name: "twitter:domain",
      content: metaUrl,
    },
    {
      name: "ia:markup_url",
      content: metaUrl,
    },
    {
      name: "ia:rules_url",
      content: metaUrl,
    },
    {
      name: "apple-touch-icon",
      content: logo,
    },
  ],
});
</script>
