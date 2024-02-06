<template>
  <div class="tab-item mb-8">
    <a-card hoverable>
      <NuxtLink :to="`/${os}/${category}/${slug}`">
        <div>
          <img v-if="logo" :src="logo" :alt="slug" />
          <img v-else src="/downsoft-logo.png" alt="default-logo" />
        </div>
      </NuxtLink>
    </a-card>
    <div class="flex justify-between pt-1">
      <div>
        <StarFilled class="text-yellow-400 mr-1" style="margin-top: -4px" />
        <span>{{ rate }}</span>
      </div>
      <div>
        {{ security }}
      </div>
    </div>
    <div class="pt-3 font-bold">
      <NuxtLink :to="`/${os}/${category}/${slug}`">{{ title }}</NuxtLink>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  os: String,
  category: String,
  logo: String,
  slug: String,
  rate: Number,
  security: Number,
});
import { StarFilled } from "@ant-design/icons-vue";
</script>
