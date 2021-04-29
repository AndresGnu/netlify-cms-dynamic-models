<template>
  <section class="pb-8">
    <div class="text-4xl font-light">{{ name }}</div>
    <div class="border-b-1 border-gray-300"></div>
    <div class="py-6">
      <slot></slot>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    name: {
      type: String
    }
  }
};
</script>
