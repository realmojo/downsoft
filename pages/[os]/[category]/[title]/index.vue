<template>
  <main class="soft-layout column pt-8">
    <!-- <Adsense slotId="123123" /> -->
    <a-row class="soft-container pt-4">
      <a-col :xs="24" :sm="24" :md="18" :lg="16" class="px-4">
        <Breadcrumb :os="os" :category="category" :title="title" />
        <div class="pt-4">
          <a-row>
            <a-col :xs="24" :sm="24" :md="24" :lg="16">
              <div class="flex">
                <div>
                  <a-image :width="120" :src="item.logo" />
                </div>
                <div class="grow pl-4 pt-4">
                  <h1 class="text-3xl font-weight-bold">
                    {{ item.title }} 다운로드
                  </h1>
                  <div class="pt-2">
                    <a-tag color="blue" class="mr-2">{{ item.license }}</a-tag>
                    <a-tag color="blue" class="mr-2">{{
                      item.primaryLanguage
                    }}</a-tag>
                    <a-tag color="blue" class="mr-2">{{ item.version }}</a-tag>
                  </div>
                  <div class="pt-2 flex">
                    <div style="margin-top: -2px" class="mr-1">
                      <StarFilled class="text-yellow-400" />
                    </div>
                    <div>
                      <span class="mt-2 mr-4 text-gray-500"
                        >{{ item.rate }} ({{ item.downloadCount }} People)</span
                      >
                    </div>
                    <div style="margin-top: -2px" class="mr-1">
                      <SafetyCertificateFilled
                        v-if="item.security === 'excellent'"
                        class="text-green-400"
                      />
                      <WarningOutlined
                        v-else-if="item.security === 'excellent'"
                        class="text-orange-400"
                      />
                      <CloseCircleOutlined
                        v-else-if="item.security === 'excellent'"
                        class="text-danger-400"
                      />
                    </div>
                    <div>
                      <span
                        v-if="item.security === 'excellent'"
                        class="mt-2 mr-4 text-gray-900"
                        >매우우수</span
                      >
                      <span
                        v-else-if="item.security === 'warning'"
                        class="mt-2 mr-4 text-gray-900"
                        >경고</span
                      >
                      <span
                        v-else-if="item.security === 'danger'"
                        class="mt-2 mr-4 text-gray-900"
                        >위험</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="8">
              <div class="flex flex-col">
                <a v-if="item.links.windowsLink" :href="item.links.windowsLink">
                  <a-button type="primary" class="btn-down w-full mb-2"
                    >Windows 무료 다운로드</a-button
                  >
                </a>
                <a v-if="item.links.macLink" :href="item.links.macLink">
                  <a-button type="primary" class="btn-down w-full mb-2"
                    >Mac 무료 다운로드</a-button
                  >
                </a>
              </div>
            </a-col>
          </a-row>
        </div>

        <section class="pt-2">
          <h2>앱 사양</h2>
          <a-descriptions class="mb-4" bordered>
            <a-descriptions-item v-if="item.license" label="라이센스">{{
              item.license
            }}</a-descriptions-item>
            <a-descriptions-item v-if="item.version" label="버전">{{
              item.version
            }}</a-descriptions-item>
            <a-descriptions-item v-if="item.updated" label="업데이트 날짜">{{
              item.updated
            }}</a-descriptions-item>

            <a-descriptions-item v-if="item.developer" label="개발자"
              ><a
                :href="item.developerLink"
                target="_blank"
                class="underline"
                >{{ item.developer }}</a
              ></a-descriptions-item
            >
          </a-descriptions>
          <h2 v-if="item.ctitle1">{{ item.ctitle1 }}</h2>
          <p v-if="item.cdescription1">
            {{ item.cdescription1 }}
          </p>
          <h2 v-if="item.ctitle2">{{ item.ctitle2 }}</h2>
          <p v-if="item.cdescription2">
            {{ item.cdescription2 }}
          </p>
          <h2 v-if="item.ctitle3">{{ item.ctitle3 }}</h2>
          <p v-if="item.cdescription3">
            {{ item.cdescription3 }}
          </p>
        </section>
      </a-col>
      <a-col :xs="24" :sm="24" :md="6" :lg="8" class="aside">
        <div>
          <Adsense slotId="123123" />
        </div>
        <!-- <div class="mt-4">
          <h2>다른 앱들</h2>
          <div class="gutter-box mb-8 os-list">
            <a-list size="large" bordered>
              <template #header>
                <div class="bg-gray-200 header-text">{{ data.title }}</div>
              </template>
              <a-list-item v-for="(app, _index) in data.apps" :key="_index">
                <a-list-item-meta>
                  <template #title>
                    <NuxtLink :to="`/${app.os}/${app.category}/${app.title}`">{{
                      app.title
                    }}</NuxtLink>
                  </template>
                  <template #avatar>
                    <a-avatar :src="app.image" />
                  </template>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </div>
        </div> -->
      </a-col>
    </a-row>
  </main>
</template>

<script setup>
import {
  WindowsOutlined,
  StarFilled,
  SafetyCertificateFilled,
  UsergroupAddOutlined,
  WarningOutlined,
  CloseCircleOutlined,
} from "@ant-design/icons-vue";
const route = useRoute();
const os = route.params.os;
const category = route.params.category;
const title = route.params.title;

const url = `https://api.getsoftbox.com/api/getItem.php?slug=${title}`;
let { data } = await useFetch(url, {
  key: "item",
  method: "get",
});

const item = JSON.parse(data._rawValue);
console.log(item);

// console.log(res);

// const data = {
//   title: "게임",
//   apps: [
//     {
//       image:
//         "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
//       title: "Steam1",
//       rating: 4.1,
//       free: "무료",
//       os: "windows",
//       category: "game",
//     },
//     {
//       image:
//         "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
//       title: "Steam2",
//       rating: 4.1,
//       free: "무료",
//       os: "windows",
//       category: "game",
//     },
//     {
//       image:
//         "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
//       title: "Steam3",
//       rating: 4.1,
//       free: "무료",
//       os: "windows",
//       category: "game",
//     },
//     {
//       image:
//         "https://images.sftcdn.net/images/t_app-icon-s/p/3047d89c-96d0-11e6-8546-00163ed833e7/4018433091/steam-Download-Steam.jpg",
//       title: "Steam4",
//       rating: 4.1,
//       free: "무료",
//       os: "windows",
//       category: "game",
//     },
//   ],
// };
</script>
