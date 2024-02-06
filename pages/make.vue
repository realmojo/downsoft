<template>
  <a-row style="width: 1280px; margin: 0 auto; margin-top: 40px">
    <a-col :span="8"
      ><div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">제목</div>
        <a-input
          v-model:value="title"
          placeholder="제목"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">슬러그 링크</div>
        <a-input v-model:value="slug" placeholder="slug" style="width: 400px" />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">한줄 설명</div>
        <a-input
          v-model:value="description"
          placeholder="description"
          style="width: 400px"
        />
      </div>

      <div>
        <div class="text-gray-900 font-weight-bold mb-2">이미지</div>
        <img v-if="logo" :src="logo" style="width: 100px" />
        <input
          type="file"
          name="file"
          @change="handleFilesChange"
          class="mb-4"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">업데이트 날짜</div>
        <a-input
          v-model:value="updated"
          placeholder="updated"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">OS</div>
        <a-checkbox-group
          v-model:value="os"
          name="checkboxgroup"
          :options="osOptions"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">카테고리</div>
        <a-select
          ref="select"
          v-model:value="category"
          style="width: 120px"
          :options="categoryOptions"
        />
      </div>

      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">대표언어</div>
        <a-select
          ref="select"
          v-model:value="primaryLanguages"
          style="width: 120px"
          :options="priOptions"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">대체언어</div>
        <a-checkbox-group
          v-model:value="altLanguages"
          name="checkboxgroup"
          :options="plainOptions"
        />
      </div>
    </a-col>
    <a-col :span="8"
      ><div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">Windows 링크</div>
        <a-input
          v-model:value="windowsLink"
          placeholder="Windows 링크"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">Mac 링크</div>
        <a-input
          v-model:value="macLink"
          placeholder="Mac 링크"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">Android 링크</div>
        <a-input
          v-model:value="androidLink"
          placeholder="Android 링크"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">iPhone 링크</div>
        <a-input
          v-model:value="iphoneLink"
          placeholder="iPhone 링크"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">버전</div>
        <a-input
          v-model:value="version"
          placeholder="version"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">개발자, 개발사</div>
        <a-input
          v-model:value="developer"
          placeholder="developer"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">개발사 링크</div>
        <a-input
          v-model:value="developerLink"
          placeholder="developerLink"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">라이센스</div>
        <a-input
          v-model:value="license"
          placeholder="유료, 무료, 일부 무료"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">뷰 카운트</div>
        <a-input
          v-model:value="viewCount"
          placeholder="뷰 카운트"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">다운로드 카운트</div>
        <a-input
          v-model:value="downloadCount"
          placeholder="다운로드 카운트"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">별점</div>
        <a-input v-model:value="rate" placeholder="별점" style="width: 400px" />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">보안등급</div>
        <a-select ref="select" v-model:value="security" style="width: 120px">
          <a-select-option value="excellent">Excellent</a-select-option>
          <a-select-option value="warning">Warning</a-select-option>
          <a-select-option value="danger">Danger</a-select-option>
        </a-select>
      </div>
    </a-col>
    <a-col :span="8">
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">애드센스1</div>
        <a-input
          v-model:value="adsense1"
          placeholder="adsense1"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">애드센스2</div>
        <a-input
          v-model:value="adsense2"
          placeholder="adsense2"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">애드센스3</div>
        <a-input
          v-model:value="adsense3"
          placeholder="adsense3"
          style="width: 400px"
        />
      </div>
      <div class="mb-4">
        <a-button @click="doSave()">저장</a-button>
      </div>
    </a-col>
  </a-row>
</template>

<script setup>
import axios from "axios";
import moment from "moment";
const route = useRoute();
const title = ref("");
const description = ref("");
const slug = ref(route.query?.slug || "");
const logo = ref("");
const os = ref([]);
const updated = ref("");
const rate = ref("");
const category = ref("");
const license = ref("");
const version = ref("");
const viewCount = ref("");
const content = ref({});
const downloadCount = ref("");
const developer = ref("");
const developerLink = ref("");
const primaryLanguages = ref(["한국어"]);
const etcInfo = ref({});
const windowsLink = ref("");
const macLink = ref("");
const androidLink = ref("");
const iphoneLink = ref("");
const adsense1 = ref("");
const adsense2 = ref("");
const adsense3 = ref("");
const security = ref("excellent");
const altLanguages = ref(["한국어", "영어", "일본어", "프랑스어", "러시아어"]);

const categoryOptions = [
  {
    value: "game",
    label: "게임",
  },
  {
    value: "ai",
    label: "AI",
  },
  {
    value: "browser",
    label: "인터넷 & 브라우저",
  },
  {
    value: "sns",
    label: "소셜네트워크",
  },
  {
    value: "security",
    label: "보안 및 개인정보",
  },
  {
    value: "media",
    label: "미디어",
  },
  {
    value: "music",
    label: "음악",
  },
  {
    value: "development",
    label: "개발도구",
  },
  {
    value: "personality",
    label: "개인화",
  },
  {
    value: "education",
    label: "교육",
  },
  {
    value: "util",
    label: "유틸리티",
  },
  {
    value: "travel",
    label: "여행",
  },
];
const priOptions = [
  {
    value: "kr",
    label: "한국어",
  },
  {
    value: "en",
    label: "영어",
  },
  {
    value: "jp",
    label: "일본어",
  },
  {
    value: "fr",
    label: "프랑스어",
  },
  {
    value: "ru",
    label: "러시아어",
  },
];
const plainOptions = ["kr", "en", "jp", "fr", "ru"];
const osOptions = ["windows", "mac", "android", "iphone"];
const handleFilesChange = async ({ target }) => {
  const formData = new FormData();
  formData.append("uploadImage", target.files[0]);
  if (slug.value) {
    const { data } = await axios.post(
      `https://f5game-bot.herokuapp.com/downsoft/upload?idx=${slug.value.toLowerCase()}`,
      // `http://localhost:3001/downsoft/upload?idx=${slug.value}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    logo.value = data;
  }
};

const doSave = async () => {
  const params = {
    title: title.value,
    description: description.value,
    slug: slug.value,
    logo: logo.value,
    os: os.value,
    category: category.value,
    license: license.value,
    links: {
      windowsLink: windowsLink.value,
      macLink: macLink.value,
      androidLink: androidLink.value,
      iphoneLink: iphoneLink.value,
    },
    primaryLanguage: primaryLanguages.value.toString(),
    altLanguages: altLanguages.value,
    developer: developer.value,
    developerLink: developerLink.value,
    content: content.value,
    rate: rate.value,
    viewCount: viewCount.value,
    downloadCount: downloadCount.value,
    updated: updated.value,
    version: version.value,
    security: security.value,
    adsense: {
      ad1: adsense1.value,
      ad2: adsense2.value,
      ad3: adsense3.value,
    },
  };
  console.log(params);

  let res = "";
  if (route.query?.slug) {
    // updated
    res = await axios.post(
      "https://api.getsoftbox.com/api/updateItem.php",
      params
    );
  } else {
    // insert
    res = await axios.post(
      "https://api.getsoftbox.com/api/addItem.php",
      params
    );
  }
  console.log(res);
};

onMounted(async () => {
  if (slug.value) {
    const { data } = await axios.get(
      `https://api.getsoftbox.com/api/getItem.php?slug=${slug.value}`
    );

    title.value = data.title;
    description.value = data.description;
    slug.value = data.slug;
    logo.value = data.logo;
    os.value = data.os;
    category.value = data.category;
    license.value = data.license;
    windowsLink.value = data.links.windowsLink || "";
    macLink.value = data.links.macLink || "";
    androidLink.value = data.links.androidLink || "";
    iphoneLink.value = data.links.iphoneLink || "";
    primaryLanguages.value = data.value;
    altLanguages.value = data.altLanguages;
    developer.value = data.developer;
    developerLink.value = data.developerLink;
    content.value = data.content;
    rate.value = data.rate;
    viewCount.value = data.viewCount;
    downloadCount.value = data.downloadCount;
    updated.value = data.updated;
    version.value = data.version;
    security.value = data.security;
    adsense1.value = data.adsense.ad1 || "";
    adsense2.value = data.adsense.ad2 || "";
    adsense3.value = data.adsense.ad3 || "";
  }
});
</script>
