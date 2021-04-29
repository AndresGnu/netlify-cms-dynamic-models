<template>
  <a v-if="href" :href="href" class="btn-indigo">
    <slot></slot>
  </a>
  <button v-else class="btn-indigo">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    href: String
  }
};
</script>
