<template>
  <div class="h-196"></div>
  <div>
    <div
      class="text-6xl"
      data-sal="fade-up"
      data-sal-delay="200"
      data-sal-repeat="true"
    >
      Aos fade
    </div>
  </div>
  <div class="h-64"></div>
</template>
<script>
export default {
  setup() {
    const context = useContext('home');

    return {
      context
    };
  }
};
</script>
