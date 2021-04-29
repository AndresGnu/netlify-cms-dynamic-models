<template>
  <p-sidebar v-model:visible="menu">
    <icon-account-box style="font-size: 2em" />
    <slot>Content</slot>
  </p-sidebar>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '../common';
import IconAccountBox from 'virtual:vite-icons/mdi/account-box';

export default defineComponent({
  components: { IconAccountBox },
  setup(props) {
    const { menu } = useStore();
    return { menu };
  }
});
</script>
