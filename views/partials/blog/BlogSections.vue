<template>
  <section class="py-20">
    <div class="container px-4 mx-auto">
      <h2 class="mb-12 lg:mb-20 text-3xl md:text-4xl font-bold font-heading">
        Our Blog
      </h2>
      <div class="flex flex-wrap -mx-4 mb-20" v-for="(blog, ix) in blogs">
        <div
          class="w-full lg:w-1/2 px-4 lg:pr-20 lg:pt-4 order-1"
          :class="{
            'lg:order-0': isPar(ix),
            'lg:pr-20': isPar(ix),
            'lg:pl-20': !isPar(ix)
          }"
        >
          <span
            class="inline-block py-1 px-3 uppercase text-xs font-semibold bg-blue-50 rounded-full text-blue-600"
            >{{ blog.category || 'Unknow' }}</span
          >
          <h3 class="my-4 text-xl md:text-2xl font-bold font-heading">
            {{ blog.title }}
          </h3>
          <p class="mb-4 text-sm md:text-base leading-loose text-blueGray-400">
            {{ blog?.preview?.abstract }}
          </p>
          <mk-link
            class="text-xs font-semibold text-blue-600"
            :to="`blogs/${blog.slug}`"
          >
            <span>Read More</span>
            <svg
              class="inline-block w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewbox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </mk-link>
        </div>
        <div
          class="w-full lg:w-1/2 px-4 mb-8 order-0"
          :class="{ 'lg:order-1': isPar(ix) }"
        >
          <img
            class="w-full h-80 object-cover rounded"
            :src="blog.preview.image"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  setup() {
    const { blogs } = useContext();
    // const {} = useGlobal()
    const isPar = (v) => {
      //
      return v % 2 === 0;
    };
    return {
      blogs,
      isPar
    };
  }
};
</script>
