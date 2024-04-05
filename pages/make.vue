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
          style="width: 400px"
          :options="categoryOptions"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">대표언어</div>
        <a-select
          ref="select"
          v-model:value="primaryLanguage"
          style="width: 400px"
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
        <div class="text-gray-900 font-weight-bold mb-2">업데이트 날짜</div>
        <a-input
          v-model:value="updated"
          placeholder="updated"
          style="width: 400px"
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
        <div class="text-gray-900 font-weight-bold mb-2">활성화</div>
        <a-radio-group v-model:value="active">
          <a-radio-button value="active">active</a-radio-button>
          <a-radio-button value="wait">wait</a-radio-button>
        </a-radio-group>
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">콘텐츠1</div>
        <a-input
          v-model:value="ctitle1"
          placeholder="제목1"
          style="width: 400px"
          class="mb-2"
        />
        <a-textarea
          v-model:value="cdescription1"
          placeholder="내용1"
          style="width: 400px"
          :rows="6"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">콘텐츠2</div>
        <a-input
          v-model:value="ctitle2"
          placeholder="제목2"
          style="width: 400px"
          class="mb-2"
        />
        <a-textarea
          v-model:value="cdescription2"
          placeholder="내용2"
          style="width: 400px"
          :rows="6"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">콘텐츠3</div>
        <a-input
          v-model:value="ctitle3"
          placeholder="제목3"
          style="width: 400px"
          class="mb-2"
        />
        <a-textarea
          v-model:value="cdescription3"
          placeholder="내용3"
          style="width: 400px"
          :rows="6"
        />
      </div>
      <div class="mb-4">
        <a-button
          style="width: 400px"
          class="bg-sky-500 text-white"
          @click="doSave()"
          >저장</a-button
        >
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
const primaryLanguage = ref("");
const etcInfo = ref({});
const windowsLink = ref("");
const macLink = ref("");
const androidLink = ref("");
const iphoneLink = ref("");
const adsense1 = ref("");
const adsense2 = ref("");
const adsense3 = ref("");
const ctitle1 = ref("");
const ctitle2 = ref("");
const ctitle3 = ref("");
const cdescription1 = ref("");
const cdescription2 = ref("");
const cdescription3 = ref("");
const security = ref("");
const active = ref("");
const altLanguages = ref([]);

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
    label: "kr",
  },
  {
    value: "en",
    label: "en",
  },
  {
    value: "jp",
    label: "jp",
  },
  {
    value: "fr",
    label: "fr",
  },
  {
    value: "ru",
    label: "ru",
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

const replaceAll = (str, searchStr, replaceStr) => {
  return str.split(searchStr).join(replaceStr);
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
    ctitle1: ctitle1.value,
    ctitle2: ctitle2.value,
    ctitle3: ctitle3.value,
    cdescription1: cdescription1.value,
    cdescription2: cdescription2.value,
    cdescription3: cdescription3.value,
    primaryLanguage: primaryLanguage.value,
    altLanguages: altLanguages.value,
    developer: developer.value,
    developerLink: developerLink.value,
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
    active: active.value,
  };
  console.log(params);

  let res = "";
  if (route.query?.slug) {
    // updated
    res = await axios.post(
      "https://api.downpang.com/api/updateItem.php",
      params
    );
  } else {
    // insert
    res = await axios.post("https://api.downpang.com/api/addItem.php", params);
  }
  console.log(res);
};

onMounted(async () => {
  if (slug.value) {
    const { data } = await axios.get(
      `https://api.downpang.com/api/getItem.php?slug=${slug.value}`
    );

    console.log(data);

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
    ctitle1.value = data.ctitle1;
    ctitle2.value = data.ctitle2;
    ctitle3.value = data.ctitle3;
    cdescription1.value = data.cdescription1;
    cdescription2.value = data.cdescription2;
    cdescription3.value = data.cdescription3;
    primaryLanguage.value = data.primaryLanguage;
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
    active.value = data.active;
    adsense1.value = data.adsense.ad1 || "";
    adsense2.value = data.adsense.ad2 || "";
    adsense3.value = data.adsense.ad3 || "";
  }
});
</script>
