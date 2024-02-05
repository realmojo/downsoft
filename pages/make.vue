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

      <div>
        <div class="text-gray-900 font-weight-bold mb-2">이미지</div>
        <input
          type="file"
          name="file"
          @change="handleFilesChange"
          class="mb-4"
        />
      </div>
      <div class="mb-4">
        <div class="text-gray-900 font-weight-bold mb-2">업데이트 날짜</div>
        <a-date-picker v-model:value="updated" />
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
        <a-select ref="select" v-model:value="category" style="width: 120px">
          <a-select-option value="game">Game</a-select-option>
          <a-select-option value="ai">Ai</a-select-option>
          <a-select-option value="life">Life</a-select-option>
        </a-select>
      </div>
      <div class="mb-4">
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
        <div class="text-gray-900 font-weight-bold mb-2">대표언어</div>
        <a-checkbox-group
          v-model:value="primaryLanguages"
          name="checkboxgroup"
          :options="plainOptions"
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
    <a-col :span="8">
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
        <div class="text-gray-900 font-weight-bold mb-2">보안등급</div>
        <a-checkbox-group
          v-model:value="security"
          name="checkboxgroup"
          :options="securityOptions"
        />
      </div>
    </a-col>
    <a-col :span="8">
      <a-button @click="doSave()">저장</a-button>
    </a-col>
  </a-row>
</template>

<script setup>
import axios from "axios";
const route = useRoute();
const title = ref("");
const slug = ref("");
const logo = ref("");
const os = ref("");
const updated = ref("");
const category = ref("");
const license = ref("");
const version = ref("");
const developer = ref("");
const developerLink = ref("");
const primaryLanguages = ref(["한국어"]);
const etcInfo = ref({});
const windowsLink = ref("");
const macLink = ref("");
const androidLink = ref("");
const iphoneLink = ref("");
const security = ref("excellent");
const altLanguages = ref(["한국어", "영어", "일본어", "프랑스어", "러시아어"]);

const plainOptions = ["한국어", "영어", "일본어", "프랑스어", "러시아어"];
const osOptions = ["Windows", "Mac", "Android", "iPhone"];
const securityOptions = ["excellent", "warning", "danger"];
// 라이센스	무료	버전	1.7.4	업데이트 날짜	2023-07-21
// 플랫폼	Mac	OS	Mac OS X	개발자	Edward
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
    slug: slug.value,
    logo: logo.value,
    os: os.value,
    category: category.value,
    updated: updated.value,
    primaryLanguage: primaryLanguages.value.toString(),
    altLanguages: altLanguages.value,
    license: license.value,
    version: version.value,
    developer: developer.value,
    developerLink: developerLink.value,
    links: {
      windowsLink: windowsLink.value,
      macLink: macLink.value,
      androidLink: androidLink.value,
      iphoneLink: iphoneLink.value,
    },
  };
  console.log(params);

  const res = await axios.post(
    "https://storypick.iwinv.net/downsoft/api/add.php",
    params
  );
  console.log(res);
};
</script>
