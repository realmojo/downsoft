<template>
  <header>
    <div class="soft-layout">
      <h1>
        <img src="/logo.png" class="logo-image" alt="downsoft-logo" />
      </h1>
      <!-- <a-button @click="doRandomStart">
        <template #icon><CaretRightOutlined /></template
      ></a-button>
      <a-button @click="doSearch">
        <template #icon><SearchOutlined /></template>
      </a-button> -->
    </div>
    <div v-if="isSearch" class="search-layout">
      <a-input
        class="w-full"
        placeholder="찾고 싶은 테스트를 검색해주세요."
        size="large"
        v-model:value="searchText"
      />
    </div>
    <a-input v-model:value="value" placeholder="Basic usage" />
    <a-input v-model:value.lazy="value1" autofocus placeholder="Lazy usage" />
    <!-- <div class="mindpang-menu-wrap">
      <ul class="mindpang-menu">
        <li v-for="menu in menuItems" :key="menu.key">
          <a
            :href="`/${menu.key !== 'all' ? `${menu.key}` : ''}`"
            :class="`menu-item ${
              category === menu.key ? 'menu-item-active' : ''
            }`"
            target="_self"
          >
            {{ menu.title }}
          </a>
        </li>
      </ul>
    </div> -->
  </header>

  <slot></slot>
  <Footer />
</template>

<script setup>
// import { SearchOutlined, CaretRightOutlined } from "@ant-design/icons-vue";

const value = ref("");
const value1 = ref("");
watch(value, () => {
  console.log(value.value);
});
watch(value1, () => {
  console.log(value1.value);
});
const runtimeConfig = useRuntimeConfig();
const route = useRoute();

const category = computed(() => {
  return route.params.category ? route.params.category : "all";
});
const isSearch = ref(false);
const searchText = ref("");
const isSearchList = ref(false);
const searchItems = ref([]);
const menuItems = ref([
  {
    title: "전체",
    key: "all",
    link: "/",
  },
  {
    title: "테스트",
    key: "test",
    link: "/test",
  },
  {
    title: "라이프",
    key: "life",
    link: "/life",
  },
  {
    title: "사랑",
    key: "love",
    link: "/love",
  },
  {
    title: "건강",
    key: "health",
    link: "/health",
  },
  {
    title: "돈",
    key: "money",
    link: "/money",
  },
  {
    title: "연예",
    key: "entertain",
    link: "/entertain",
  },
  {
    title: "다운로드",
    key: "download",
    link: "/download",
  },
]);

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const debounce = (func, limit) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, limit);
  };
};

watch(
  searchText,
  debounce(async (newSearchText) => {
    if (newSearchText) {
      const url = `https://api.mindpang.com/api/mind/search.php?search=${newSearchText}`;
      const { data } = await useFetch(url, {
        key: "main",
        method: "get",
      });
      const d = JSON.parse(data._rawValue);
      searchItems.value = d.items;
    } else {
      searchItems.value = [];
    }
  }, 300)
);

const doSearch = () => {
  isSearch.value = !isSearch.value;
  isSearchList.value = !isSearchList.value;
};

const doRandomStart = async () => {
  const url = `https://api.mindpang.com/api/mind/all.php`;
  const { data } = await useFetch(url, {
    key: "all",
    method: "get",
  });
  const d = JSON.parse(data._rawValue).items;
  const randomNumber = getRandomNumber(0, d.length - 1);
  location.href = `/${d[randomNumber].category}/${d[randomNumber].link}/`;
};
</script>
