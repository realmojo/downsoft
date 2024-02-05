<template>
  <main class="soft-layout column pt-8">
    <h2 class="text-2xl">인기 앱</h2>
    <a-flex wrap="wrap" gap="large">
      <template v-for="(app, key) in apps" :key="key">
        <TabItem
          :image="app.image"
          :title="app.title"
          :rating="app.rating"
          :free="app.free"
          :os="app.os"
          :category="app.category"
          :link="app.link"
        />
      </template>
    </a-flex>

    <div class="os-container pt-20">
      <!-- <Breadcrumb :os="os" :category="category" /> -->
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
                        :to="`${app.os}/${app.category}/${app.title}`"
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
const apps = ref([
  {
    image:
      "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
    title: "Steam",
    rating: 4.1,
    free: "무료",
    os: "windows",
    category: "game",
    link: "steam",
  },
  {
    image:
      "https://images.sftcdn.net/images/t_app-icon-s/p/fe087176-55c2-4976-8231-5c51aed67a80/2012546824/palworld-download-palworld.jpg",
    title: "Palworld",
    rating: 4.3,
    free: "무료",
    os: "windows",
    category: "game",
    link: "palworld",
  },
  {
    image:
      "https://images.sftcdn.net/images/t_app-icon-s/p/4afa1fbe-96d1-11e6-8896-00163ec9f5fa/2603905197/hwmonitor-hwmonitor.jpg",
    title: "Google Chrome",
    rating: 4.4,
    free: "유료",
    os: "windows",
    category: "game",
    link: "chrome",
  },
  {
    image:
      "https://images.sftcdn.net/images/t_app-icon-s/p/9848e854-ffae-11e6-a59d-00163ed833e7/2949821524/discord-icon.png",
    title: "Discord",
    rating: 4.1,
    free: "무료",
    os: "windows",
    category: "game",
    link: "discord",
  },
  {
    image:
      "https://images.sftcdn.net/images/t_app-icon-s/p/a3fbd9dc-96d0-11e6-88e1-00163ed833e7/146228571/cpu-z-146228571.png",
    title: "Steam",
    rating: 4.3,
    free: "CPU-Z",
    os: "mac",
    category: "util",
    link: "steam",
  },
  {
    image:
      "https://images.sftcdn.net/images/t_app-icon-s/p/5c1ff386-96d1-11e6-9540-00163ec9f5fa/1902184157/microsoft-powerpoint-2010-94px-Microsoft_Office_PowerPoint_(2013%E2%80%93present).svg.png",
    title: "Microsoft Powerpoint",
    rating: 4.4,
    free: "무료",
    os: "windows",
    category: "util",
    link: "ppt",
  },
]);

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
