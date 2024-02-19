<template>
  <main class="soft-layout column pt-8">
    <h1>
      <strong class="underline">{{ slug }}</strong
      >의 검색 결과 입니다.
    </h1>

    <div>
      <a-list item-layout="horizontal" :data-source="items">
        <template #renderItem="{ item }">
          <NuxtLink :to="`/${item.category}/${item.slug}`" class="text-sky-500">
            <a-list-item>
              <a-list-item-meta :description="item.description">
                <template #title>{{ item.title }} </template>
                <template #avatar>
                  <a-avatar :src="item.logo" :alt="item.title" />
                </template>
              </a-list-item-meta>
            </a-list-item>
          </NuxtLink>
        </template>
      </a-list>
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;

const url = `https://api.getsoftbox.com/api/getItemsBySlug.php?slug=${slug}`;
console.log(url);
let { data } = await useFetch(url, {
  key: "item",
  method: "get",
});

const items = JSON.parse(data._rawValue);
console.log(items);
// onMounted(() => {
//   console.log(slug);
// });
</script>
