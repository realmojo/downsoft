<template>
  <header>
    <div class="soft-layout">
      <div>
        <a-button type="link" @click="showDrawer" class="menu-icon">
          <template #icon>
            <MenuOutlined />
          </template>
        </a-button>
        <img src="/downsoft-logo.png" class="logo-image" alt="downsoft-logo" />
      </div>
      <div class="downsoft-main-title">
        <h1>Downsoft</h1>
      </div>
    </div>
  </header>
  <a-drawer
    v-model:open="open"
    class="custom-class"
    root-class-name="root-class-name"
    title="카테고리"
    placement="left"
    :closable="false"
    @after-open-change="afterOpenChange"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>

  <!-- <div class="soft-layout"> -->
  <slot></slot>
  <!-- </div> -->
  <Footer />
</template>

<script setup>
import { MenuOutlined } from "@ant-design/icons-vue";
const open = ref(false);

const afterOpenChange = (bool) => {
  console.log("open", bool);
};
const showDrawer = () => {
  open.value = true;
};
// const runtimeConfig = useRuntimeConfig();
// const route = useRoute();

// const category = computed(() => {
//   return route.params.category ? route.params.category : "all";
// });
// const isSearch = ref(false);
// const searchText = ref("");
// const isSearchList = ref(false);
// const searchItems = ref([]);
// const menuItems = ref([
//   {
//     title: "전체",
//     key: "all",
//     link: "/",
//   },
//   {
//     title: "테스트",
//     key: "test",
//     link: "/test",
//   },
//   {
//     title: "라이프",
//     key: "life",
//     link: "/life",
//   },
//   {
//     title: "사랑",
//     key: "love",
//     link: "/love",
//   },
//   {
//     title: "건강",
//     key: "health",
//     link: "/health",
//   },
//   {
//     title: "돈",
//     key: "money",
//     link: "/money",
//   },
//   {
//     title: "연예",
//     key: "entertain",
//     link: "/entertain",
//   },
//   {
//     title: "다운로드",
//     key: "download",
//     link: "/download",
//   },
// ]);

// const getRandomNumber = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const debounce = (func, limit) => {
//   let timeout;
//   return function (...args) {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       func.apply(this, args);
//     }, limit);
//   };
// };

// watch(
//   searchText,
//   debounce(async (newSearchText) => {
//     if (newSearchText) {
//       const url = `https://api.mindpang.com/api/mind/search.php?search=${newSearchText}`;
//       const { data } = await useFetch(url, {
//         key: "main",
//         method: "get",
//       });
//       const d = JSON.parse(data._rawValue);
//       searchItems.value = d.items;
//     } else {
//       searchItems.value = [];
//     }
//   }, 300)
// );

// const doSearch = () => {
//   isSearch.value = !isSearch.value;
//   isSearchList.value = !isSearchList.value;
// };

// const doRandomStart = async () => {
//   const url = `https://api.mindpang.com/api/mind/all.php`;
//   const { data } = await useFetch(url, {
//     key: "all",
//     method: "get",
//   });
//   const d = JSON.parse(data._rawValue).items;
//   const randomNumber = getRandomNumber(0, d.length - 1);
//   location.href = `/${d[randomNumber].category}/${d[randomNumber].link}/`;
// };
</script>
