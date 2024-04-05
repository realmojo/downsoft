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
            alt="downpang-logo"
          />
        </NuxtLink>
      </div>
      <div class="downpang-main-title">
        <NuxtLink to="/">Downpang</NuxtLink>
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
    <a-menu mode="inline" :items="items" @click="doLink"></a-menu>
  </a-drawer>

  <slot></slot>
  <Footer />
</template>

<script setup>
import categories from "assets/js/categories.json";
import {
  MenuOutlined,
  WindowsOutlined,
  AppleOutlined,
  AndroidOutlined,
  MobileOutlined,
} from "@ant-design/icons-vue";
const open = ref(false);
const selectedKeys = ref(["windows"]);
const openKeys = ref(["windows"]);
const router = useRouter();
const route = useRoute();
const title = route.params.title;

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

const itemCategories = [];
for (const item of categories) {
  itemCategories.push(getItem(item.name, item.value));
}

const items = reactive(itemCategories);

const doLink = (e) => {
  router.push({ path: `/${e.key}` });
  open.value = false;
};

const afterOpenChange = (bool) => {
  console.log("open", bool);
};
const showDrawer = () => {
  open.value = true;
};
</script>
