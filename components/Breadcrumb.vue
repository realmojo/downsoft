<template>
  <a-breadcrumb>
    <a-breadcrumb-item><NuxtLink to="/">Home</NuxtLink></a-breadcrumb-item>
    <a-breadcrumb-item v-if="os">
      <NuxtLink :to="`/${os}`" class="text-sky-500">{{
        os.toUpperCase()
      }}</NuxtLink>
      <template v-if="!title" #overlay>
        <a-menu>
          <a-menu-item v-for="(item, index) in osRouters" :key="index">
            <NuxtLink :to="`/${item.value}`"
              ><strong>{{ item.value.toUpperCase() }}</strong></NuxtLink
            >
          </a-menu-item>
        </a-menu>
      </template>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-if="category">
      <NuxtLink :to="`/${category}`" class="text-sky-500">{{
        category.toUpperCase()
      }}</NuxtLink>
      <template v-if="!title" #overlay>
        <a-menu>
          <a-menu-item v-for="(item, index) in categoryRouters" :key="index">
            <NuxtLink :to="`/${item.value}`"
              ><strong>{{ item.value.toUpperCase() }}</strong></NuxtLink
            >
          </a-menu-item>
        </a-menu>
      </template>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-if="title">
      {{ title }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script setup>
import categories from "assets/js/categories.json";
const props = defineProps({
  os: String,
  category: String,
  title: String,
});
const osRouters = [
  {
    link: "windows",
  },
  {
    link: "mac",
  },
  {
    link: "android",
  },
  {
    link: "iphone",
  },
];
const categoryRouters = categories;
</script>
