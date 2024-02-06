<template>
  <header>
    <div class="flex header px-4">
      <div>
        <a-button type="link" @click="showDrawer" class="menu-icon">
          <template #icon>
            <MenuOutlined />
          </template>
        </a-button>
        <NuxtLink to="/">
          <img
            src="/downsoft-logo.png"
            class="logo-image"
            alt="downsoft-logo"
          />
        </NuxtLink>
      </div>
      <div class="downsoft-main-title">
        <NuxtLink to="/"><h1>Softbox</h1></NuxtLink>
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
    <a-menu
      v-model:selectedKeys="state.selectedKeys"
      mode="inline"
      :open-keys="state.openKeys"
      :items="items"
      @openChange="onOpenChange"
      @click="doLink"
    ></a-menu>
  </a-drawer>

  <!-- <div class="soft-layout"> -->
  <slot></slot>
  <!-- </div> -->
  <Footer />
</template>

<script setup>
import {
  MenuOutlined,
  WindowsOutlined,
  AppleOutlined,
  AndroidOutlined,
  MobileOutlined,
} from "@ant-design/icons-vue";
const open = ref(false);
const selectedKeys = ref(["windows"]);
const openKeys = ref(["sub1"]);
const router = useRouter();
const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};
const categories = [
  {
    name: "홈",
    value: "home",
  },
  {
    name: "게임",
    value: "game",
  },
  {
    name: "AI",
    value: "ai",
  },
  {
    name: "브라우저",
    value: "browser",
  },
  {
    name: "보안 및 개인정보",
    value: "security",
  },
  {
    name: "개발",
    value: "development",
  },
  {
    name: "개인화",
    value: "personality",
  },
  {
    name: "교육",
    value: "education",
  },
  {
    name: "음악",
    value: "music",
  },
  {
    name: "소셜네트워크",
    value: "sns",
  },
  {
    name: "여행",
    value: "travel",
  },
  {
    name: "미디어",
    value: "media",
  },
];

const itemCategories = [];
for (const item of categories) {
  itemCategories.push(getItem(item.name, item.value));
}

const items = reactive([
  getItem("Windows", "windows", () => h(WindowsOutlined), itemCategories),
  getItem("Mac", "mac", () => h(AppleOutlined), itemCategories),
  getItem("Android", "android", () => h(AndroidOutlined), itemCategories),
  getItem("iPhone", "iphone", () => h(MobileOutlined), itemCategories),
]);
const state = reactive({
  rootSubmenuKeys: ["windows", "mac", "android", "iphone"],
  openKeys: ["sub1"],
  selectedKeys: [],
});
const onOpenChange = (openKeys) => {
  const latestOpenKey = openKeys.find(
    (key) => state.openKeys.indexOf(key) === -1
  );
  if (state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    state.openKeys = openKeys;
  } else {
    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
  }
};

const doLink = (e) => {
  if (e.key === "home") {
    router.push({ path: `/${e.keyPath[0]}` });
  } else {
    router.push({ path: `/${e.keyPath[0]}/${e.key}` });
  }

  open.value = false;
};

const afterOpenChange = (bool) => {
  console.log("open", bool);
};
const showDrawer = () => {
  open.value = true;
};
// const runtimeConfig = useRuntimeConfig();

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
