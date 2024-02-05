<template>
  <div>
    <a-card hoverable>
      <NuxtLink :to="`/${os}/${category}/${link}`">
        <div class="tab-item">
          <img :src="image" />
        </div>
      </NuxtLink>
    </a-card>
    <div class="flex justify-between pt-1">
      <div>
        <StarFilled class="text-yellow-400 mr-1" style="margin-top: -4px" />
        <span>{{ rating }}</span>
      </div>
      <div>
        {{ free }}
      </div>
    </div>
    <div class="pt-3 text-xl font-bold">
      <NuxtLink :to="`/${os}/${category}/${link}`">{{ title }} </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  title: String,
  rating: Number,
  free: String,
  os: String,
  category: String,
  link: String,
});
import { StarFilled } from "@ant-design/icons-vue";
</script>
