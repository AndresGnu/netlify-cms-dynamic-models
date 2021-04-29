<template>
  <div>Home {{ title }}</div>
  <client-render>
    <the-features>
      <template #items="{ onIntersect }">
        <server-render>
          <div
            v-for="i in 5"
            :key="i"
            :v-insersect="`{
                      handler: (a,b)=>onIntersect(${i},a,b),
                      options: {
                        threshold: [0, 0.5, 1.0]
                      }
                    }`"
          >
            <p>
              {{ i }}
            </p>
          </div>
        </server-render>
      </template>
    </the-features>
  </client-render>
</template>
<script>
export default {
  setup() {
    /**
     * @type string
     */
    const it = inject('it', {});
    return {
      title: 'setup page',
      it: it.globals,
    };
  },
};
</script>
