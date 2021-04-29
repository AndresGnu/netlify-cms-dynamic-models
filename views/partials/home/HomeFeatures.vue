<template>
  <section class="pt-16 pb-20 bg-gray-50">
    <div class="container px-4 mx-auto">
      <div class="flex flex-wrap items-center mb-12">
        <div class="w-full lg:w-1/2 mb-6 lg:mb-0">
          <h2
            class="text-4xl font-bold font-heading"
            v-html="features.title"
          ></h2>
        </div>
        <div class="w-full lg:w-1/2">
          <p class="lg:pl-16 text-gray-400 leading-loose">
            {{ features.description }}
          </p>
        </div>
      </div>
      <div class="flex flex-wrap -mx-3 -mb-6">
        <div
          class="w-full md:w-1/2 lg:w-1/4 px-3 mb-6"
          v-for="(feature, ix) in features.items"
          :key="ix"
        >
          <div class="pt-8 px-6 pb-6 bg-white text-center rounded shadow">
            <mk-icon
              class="mx-auto mb-4 text-blue-600 inline-block"
              fill="none"
              classIcon="w-10 h-10 "
              stroke="currentColor"
              size="auto"
            >
              {{ feature.icon }}
            </mk-icon>
            <!-- <svg
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              ></path>
            </svg> -->
            <h3 class="mb-2 font-bold font-heading">
              {{ feature.title }}
            </h3>
            <p class="text-sm text-gray-400">
              {{ feature.subtitle }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  setup() {
    const { features } = useContext();
    // const {} = useGlobal()
    return {
      features
    };
  }
};
</script>
