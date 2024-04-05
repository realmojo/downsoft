<template>
  <div class="search-container">
    <div class="search-wrap">
      <div class="search-text">당신이 필요한 앱을 모두 한 곳에</div>
      <div class="search-input-wrap">
        <a-input-search
          v-model:value="value"
          placeholder="Search app..."
          @keyup.enter="search"
        />
      </div>
    </div>
  </div>
  <main class="soft-layout column">
    <h2 class="text-2xl">게임</h2>
    <a-row>
      <a-col
        :xs="12"
        :sm="8"
        :md="6"
        :lg="4"
        v-for="(item, key) in gameItems"
        :key="key"
        ><TabItem
          :logo="item.logo"
          :title="item.title"
          :rate="item.rate"
          :license="item.license"
          :category="item.category"
          :link="item.link"
          :slug="item.slug"
      /></a-col>
    </a-row>
    <h2 class="text-2xl">브라우저</h2>
    <a-row>
      <a-col
        :xs="12"
        :sm="8"
        :md="6"
        :lg="4"
        v-for="(item, key) in browserItems"
        :key="key"
        ><TabItem
          :logo="item.logo"
          :title="item.title"
          :rate="item.rate"
          :license="item.license"
          :category="item.category"
          :link="item.link"
          :slug="item.slug"
      /></a-col>
    </a-row>
    <h2 class="text-2xl">보안 및 개인정보</h2>
    <a-row>
      <a-col
        :xs="12"
        :sm="8"
        :md="6"
        :lg="4"
        v-for="(item, key) in securityItems"
        :key="key"
        ><TabItem
          :logo="item.logo"
          :title="item.title"
          :rate="item.rate"
          :license="item.license"
          :category="item.category"
          :link="item.link"
          :slug="item.slug"
      /></a-col>
    </a-row>
    <h2 class="text-2xl">개발 및 IT</h2>
    <a-row>
      <a-col
        :xs="12"
        :sm="8"
        :md="6"
        :lg="4"
        v-for="(item, key) in developerItems"
        :key="key"
        ><TabItem
          :logo="item.logo"
          :title="item.title"
          :rate="item.rate"
          :license="item.license"
          :category="item.category"
          :link="item.link"
          :slug="item.slug"
      /></a-col>
    </a-row>
  </main>
</template>
<script setup>
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons-vue";
const router = useRouter();
const value = ref("");
const activeKey = ref(1);

const search = async () => {
  if (value.value) {
    router.push({ path: `/search/${value.value}` });
  }
};

let url = `https://api.downpang.com/api/getItemsMainByCategory.php`;
let { data } = await useFetch(url, {
  key: "item",
  method: "get",
});

const items = JSON.parse(data._rawValue);
const gameItems = items.slice(0, 6);
const browserItems = items.slice(6, 12);
const securityItems = items.slice(12, 18);
const developerItems = items.slice(18, 24);
</script>
