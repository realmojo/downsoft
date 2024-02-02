<template>
  <div>
    <a-card hoverable>
      <div class="tab-item">
        <img :src="image" />
      </div>
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
    <div class="pt-3 text-xl font-bold">{{ title }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  image: String,
  title: String,
  rating: Number,
  free: String,
});
import { StarFilled } from "@ant-design/icons-vue";
</script>
