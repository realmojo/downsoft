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
                  <a-image
                    :width="120"
                    src="https://images.sftcdn.net/images/t_app-icon-s/p/4afa1fbe-96d1-11e6-8896-00163ec9f5fa/2603905197/hwmonitor-hwmonitor.jpg"
                  />
                </div>
                <div class="grow pl-4 pt-4">
                  <h1 class="text-3xl font-weight-bold">
                    {{ title }} 다운로드
                  </h1>
                  <div class="pt-2">
                    <a-tag color="blue" class="mr-2">무료</a-tag>
                    <a-tag color="blue" class="mr-2">한국어</a-tag>
                    <a-tag color="blue" class="mr-2">V.12</a-tag>
                  </div>
                  <div class="pt-2 flex">
                    <div style="margin-top: -2px" class="mr-1">
                      <StarFilled class="text-yellow-400" />
                    </div>
                    <div>
                      <span class="mt-2 mr-4 text-gray-500"
                        >4.4 (4,551 People)</span
                      >
                    </div>
                    <div style="margin-top: -2px" class="mr-1">
                      <SafetyCertificateFilled class="text-green-400" />
                    </div>
                    <div>
                      <span class="mt-2 mr-4 text-gray-900">보안우수</span>
                    </div>
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :xs="24" :sm="24" :md="24" :lg="8">
              <div class="flex flex-col">
                <a-button type="primary" class="btn-down w-full mb-2"
                  >Mac 무료 다운로드</a-button
                >
                <a-button type="primary" class="btn-down w-full mb-2"
                  >iPhone 무료 다운로드</a-button
                >
              </div>
            </a-col>
          </a-row>
        </div>

        <section class="pt-2">
          <h2>앱 사양</h2>
          <a-descriptions class="mb-4" bordered>
            <a-descriptions-item label="라이센스">무료</a-descriptions-item>
            <a-descriptions-item label="버전">1.7.4</a-descriptions-item>
            <a-descriptions-item label="업데이트 날짜"
              >2023-07-21</a-descriptions-item
            >
            <a-descriptions-item label="플랫폼">Mac</a-descriptions-item>
            <a-descriptions-item label="OS">Mac OS X</a-descriptions-item>
            <a-descriptions-item label="개발자">Edward</a-descriptions-item>
          </a-descriptions>
          <h2>Google 초고속 브라우저</h2>
          <p>
            국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의
            위임 또는 직권으로 총리령 또는 부령을 발할 수 있다. 국가는
            대외무역을 육성하며, 이를 규제·조정할 수 있다. 대통령은 국가의
            안위에 관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여
            긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여 법률의
            효력을 가지는 명령을 발할 수 있다. 헌법재판소 재판관은 탄핵 또는
            금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 법관이
            중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는
            바에 의하여 퇴직하게 할 수 있다. 대통령은 헌법과 법률이 정하는 바에
            의하여 공무원을 임면한다. 명령·규칙 또는 처분이 헌법이나 법률에
            위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로
            심사할 권한을 가진다.
          </p>
          <h2>{{ title }} 특징</h2>
          <p>
            국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의
            위임 또는 직권으로 총리령 또는 부령을 발할 수 있다. 국가는
            대외무역을 육성하며, 이를 규제·조정할 수 있다. 대통령은 국가의
            안위에 관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여
            긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여 법률의
            효력을 가지는 명령을 발할 수 있다. 헌법재판소 재판관은 탄핵 또는
            금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 법관이
            중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는
            바에 의하여 퇴직하게 할 수 있다. 대통령은 헌법과 법률이 정하는 바에
            의하여 공무원을 임면한다. 명령·규칙 또는 처분이 헌법이나 법률에
            위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로
            심사할 권한을 가진다.
          </p>
          <h2>안정성 매우 좋음</h2>
          <p>
            국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의
            위임 또는 직권으로 총리령 또는 부령을 발할 수 있다. 국가는
            대외무역을 육성하며, 이를 규제·조정할 수 있다. 대통령은 국가의
            안위에 관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여
            긴급한 조치가 필요하고 국회의 집회가 불가능한 때에 한하여 법률의
            효력을 가지는 명령을 발할 수 있다. 헌법재판소 재판관은 탄핵 또는
            금고 이상의 형의 선고에 의하지 아니하고는 파면되지 아니한다. 법관이
            중대한 심신상의 장해로 직무를 수행할 수 없을 때에는 법률이 정하는
            바에 의하여 퇴직하게 할 수 있다. 대통령은 헌법과 법률이 정하는 바에
            의하여 공무원을 임면한다. 명령·규칙 또는 처분이 헌법이나 법률에
            위반되는 여부가 재판의 전제가 된 경우에는 대법원은 이를 최종적으로
            심사할 권한을 가진다.
          </p>
        </section>
      </a-col>
      <a-col :xs="24" :sm="24" :md="6" :lg="8" class="aside">
        <div>
          <Adsense slotId="123123" />
        </div>
        <div class="mt-4">
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
        </div>
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
} from "@ant-design/icons-vue";
const route = useRoute();
const os = route.params.os;
const category = route.params.category;
const title = route.params.title;

const data = {
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
};
</script>
