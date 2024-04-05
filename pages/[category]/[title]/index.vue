<template>
  <main class="soft-layout column pt-8">
    <a-row class="soft-container pt-4">
      <a-col :xs="24" :sm="24" :md="18" :lg="16">
        <Breadcrumb :os="os" :category="category" :title="title" />
        <div class="pt-4">
          <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="16">
              <div class="flex">
                <div>
                  <a-image :width="120" :src="item.logo" />
                </div>
                <div class="grow pl-4 pt-4">
                  <h1 class="text-3xl font-weight-bold">
                    {{ item.title }} 다운로드
                  </h1>
                  <div class="pt-2">
                    <a-tag v-if="item.license" color="blue" class="mr-2">{{
                      item.license
                    }}</a-tag>
                    <a-tag
                      v-if="item.primaryLanguage"
                      color="blue"
                      class="mr-2"
                      >{{ countryCode[item.primaryLanguage] }}</a-tag
                    >
                    <a-tag v-if="item.version" color="blue" class="mr-2">{{
                      item.version
                    }}</a-tag>
                  </div>
                  <div class="pt-2 flex">
                    <div v-if="item.rate" style="margin-top: -2px" class="mr-1">
                      <StarFilled class="text-yellow-400" />
                    </div>
                    <div v-if="item.rate">
                      <span class="mt-2 mr-4 text-gray-500"
                        >{{ item.rate }} ({{ item.downloadCount }} People)</span
                      >
                    </div>
                    <div style="margin-top: -2px" class="mr-1">
                      <SafetyCertificateFilled
                        v-if="item.security === 'excellent'"
                        class="text-green-400"
                      />
                      <WarningOutlined
                        v-else-if="item.security === 'warning'"
                        class="text-orange-400"
                      />
                      <CloseCircleOutlined
                        v-else-if="item.security === 'danger'"
                        class="text-danger-400"
                      />
                    </div>
                    <div>
                      <span
                        v-if="item.security === 'excellent'"
                        class="mt-2 mr-4 text-gray-900"
                        >매우우수</span
                      >
                      <span
                        v-else-if="item.security === 'warning'"
                        class="mt-2 mr-4 text-gray-900"
                        >경고</span
                      >
                      <span
                        v-else-if="item.security === 'danger'"
                        class="mt-2 mr-4 text-gray-900"
                        >위험</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </a-col>
            <!-- <a-col :xs="24" :sm="24" :md="24" :lg="8">
              <div class="flex flex-col">
              </div>
            </a-col> -->
          </a-row>
        </div>

        <section class="pt-2">
          <h2>다운로드</h2>
          <p>
            <a-row :gutter="16">
              <a-col v-if="item.links && item.links.windowsLink" :xs="12" :sm="6">
                <a :href="item.links.windowsLink" target="_blank">
                  <a-button type="primary" class="btn-down w-full mb-2">Windows</a-button>
                </a>
              </a-col>
              <a-col v-if="item.links && item.links.macLink" :xs="12" :sm="6">
                <a :href="item.links.macLink" target="_blank">
                  <a-button type="primary" class="btn-down w-full mb-2">Mac</a-button>
                </a>
              </a-col>
              <a-col v-if="item.links && item.links.androidLink" :xs="12" :sm="6">
                <a :href="item.links.androidLink" target="_blank">
                  <a-button type="primary" class="btn-down w-full mb-2">Android</a-button>
                </a>
              </a-col>
              <a-col v-if="item.links && item.links.iphoneLink" :xs="12" :sm="6">
                <a :href="item.links.iphoneLink" target="_blank">
                  <a-button type="primary" class="btn-down w-full mb-2">iPhone</a-button>
                </a>
              </a-col>
            </a-row>
          </p>
          <h2>앱 사양</h2>
          <a-descriptions class="mb-8" bordered>
            <a-descriptions-item v-if="item.license" label="라이센스">{{
              item.license
            }}</a-descriptions-item>
            <a-descriptions-item v-if="item.version" label="버전">{{
              item.version
            }}</a-descriptions-item>
            <a-descriptions-item v-if="item.updated" label="업데이트 날짜">{{
              item.updated
            }}</a-descriptions-item>

            <a-descriptions-item v-if="item.developer" label="개발자"
              ><a
                :href="item.developerLink"
                target="_blank"
                class="underline"
                >{{ item.developer }}</a
              ></a-descriptions-item
            >
          </a-descriptions>
          <h2 v-if="item.ctitle1">{{ item.ctitle1 }}</h2>
          <p v-if="item.cdescription1" v-html="item.cdescription1"></p>
          <h2 v-if="item.ctitle2">{{ item.ctitle2 }}</h2>
          <p v-if="item.cdescription2" v-html="item.cdescription2"></p>
          <h2 v-if="item.ctitle3">{{ item.ctitle3 }}</h2>
          <p v-if="item.cdescription3" v-html="item.cdescription3"></p>
          <h2 v-if="item.ctitle4">{{ item.ctitle4 }}</h2>
          <p v-if="des4.length > 1">
            <div v-for="(des, key) in des4" :key="key">{{des}}</div>
          </p>
          <p v-else v-html="item.cdescription4"></p>
        </section>
      </a-col>
      <a-col :xs="24" :sm="24" :md="6" :lg="8" class="aside">
        <h2>추천 앱</h2>
        <a-list :data-source="rItems">
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
        <div>
          <Adsense slotId="123123" />
        </div>
      </a-col>
    </a-row>
  </main>
</template>

<script setup>
import {
  WindowsOutlined,
  StarFilled,
  SafetyCertificateFilled,
  UsergroupAddOutlined,
  WarningOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons-vue";
import countryCode from "assets/js/countryCode.json";
const route = useRoute();
const os = route.params.os;
const category = route.params.category;
const title = route.params.title;

let url = `https://api.downpang.com/api/getItem.php?slug=${title}`;
let { data } = await useFetch(url, {
  key: "item",
  method: "get",
});

const item = JSON.parse(data._rawValue);
const des1 = item.cdescription1 ? item.cdescription1.split(". ") : "";
const des2 = item.cdescription2 ? item.cdescription2.split(". ") : "";
const des3 = item.cdescription3 ? item.cdescription3.split(". ") : "";
const des4 = item.cdescription4 ? item.cdescription4.split("\n") : "";

url = `https://api.downpang.com/api/getItemsByRecommend.php?category=${category}&limit=6`;
let { data: recommendItem } = await useFetch(url, {
  key: "recommendItems",
  method: "get",
});
const rItems = JSON.parse(recommendItem._rawValue);

const metaUrl = `https://downpang.com${route.path}`;
const metaTitle = `${item.title} 다운로드 - 다운팡`;
const meataDescription = item.cdescription1.substr(0, 160);
const logo = item.logo;
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
      content: "Downpang",
    },
    {
      name: "og:site_name",
      content: "Downpang",
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
      content: "@downpang.com",
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
