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
  <!-- <main class="soft-layout column pt-8">
    <h2 class="text-2xl">인기 앱</h2>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane v-for="(item, index) in tabItems" :key="Number(index + 1)">
        <template #tab>
          <span>
            <template v-if="item.title === 'Apple'"><AppleOutlined /></template>
            <template v-else-if="item.title === 'Android'"
              ><AndroidOutlined
            /></template>

            {{ item.title }}
          </span>
        </template>
        <a-flex wrap="wrap" gap="large">
          <template v-for="(app, key) in item.apps" :key="key">
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
      </a-tab-pane>
    </a-tabs>
  </main> -->
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

const tabItems = ref([
  {
    title: "Apple",
    apps: [
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
        free: "지불",
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
        os: "windows",
        category: "game",
        link: "cpu-z",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/5c1ff386-96d1-11e6-9540-00163ec9f5fa/1902184157/microsoft-powerpoint-2010-94px-Microsoft_Office_PowerPoint_(2013%E2%80%93present).svg.png",
        title: "Microsoft Powerpoint",
        rating: 4.4,
        free: "무료",
        os: "windows",
        category: "game",
        link: "ppt",
      },
    ],
  },
  {
    title: "Android",
    apps: [
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam",
        rating: 3.1,
        free: "무료",
        os: "windows",
        category: "game",
        link: "steam",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam",
        rating: 4.1,
        free: "무료",
        os: "windows",
        category: "game",
        link: "Steam",
      },
      {
        image:
          "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
        title: "Steam",
        rating: 5,
        free: "무료",
        os: "windows",
        category: "game",
        link: "Steam",
      },
    ],
  },
]);
</script>
