<template>
  <main class="soft-layout column pt-8">
    <Breadcrumb :os="os" :category="category" class="pt-4 mb-10" />
    <h2 class="text-2xl">인기 앱</h2>
    <a-flex wrap="wrap" gap="large">
      <template v-for="(app, key) in apps" :key="key">
        <TabItem
          :title="app.title"
          :logo="app.logo"
          :slug="app.slug"
          :rate="app.rate"
          :security="app.security"
          :os="os"
          :category="app.category"
        />
      </template>
    </a-flex>

    <div class="os-container pt-20">
      <div class="pt-8">
        <h2 class="text-2xl">{{ os.toUpperCase() }} 앱</h2>
        <a-row :gutter="16">
          <a-col
            v-for="(item, index) in data"
            class="gutter-row"
            :span="6"
            :key="index"
          >
            <div class="gutter-box mb-8 os-list">
              <a-list size="large" bordered>
                <template #header>
                  <div class="bg-gray-200 header-text">{{ item.title }}</div>
                </template>
                <a-list-item v-for="(app, _index) in item.apps" :key="_index">
                  <a-list-item-meta>
                    <template #title>
                      <NuxtLink
                        :to="`/${app.os}/${app.category}/${app.title}`"
                        >{{ app.title }}</NuxtLink
                      >
                    </template>
                    <template #avatar>
                      <a-avatar :src="app.image" />
                    </template>
                  </a-list-item-meta>
                </a-list-item>
              </a-list>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
const os = route.params.os;
const category = "ALL";
const apps = ref([]);
const url = `https://api.getsoftbox.com/api/getItemByOs.php?os=${os}`;
let res = await useFetch(url, {
  key: "item",
  method: "get",
});

const d = JSON.parse(res.data._rawValue);
apps.value = d;

const data = [
  {
    title: "게임",
    apps: [
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam1",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam2",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam3",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam4",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
    ],
  },
  {
    title: "생산성",
    apps: [
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam5",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam6",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam7",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam8",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
    ],
  },
  {
    title: "브라우저",
    apps: [
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam9",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam10",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam11",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam12",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
    ],
  },
  {
    title: "개발",
    apps: [
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam13",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam14",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam15",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam16",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
      },
    ],
  },
];
</script>
