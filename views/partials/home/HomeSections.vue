<template>
  <!-- {{contex.info.title}} 
  <div v-if="hola"></div>
  -->
  <div class="container px-4 mx-auto">
    <div class="py-12 text-center">
      <div class="max-w-lg mx-auto mb-8">
        <h2
          class="text-3xl md:text-4xl mb-4 font-bold font-heading"
          v-html="context.header.title"
        ></h2>
        <p class="text-blueGray-400 leading-relaxed">
          {{ context.header.subtitle }}
        </p>
      </div>
      <div>
        <a
          class="block sm:inline-block py-4 px-8 mb-4 sm:mb-0 sm:mr-3 text-xs text-white text-center font-semibold leading-none bg-blue-600 hover:bg-blue-700 rounded"
          href="#"
          >Check Now</a
        ><a
          class="block sm:inline-block py-4 px-8 text-xs text-gray-500 hover:text-blueGray-600 text-center font-semibold leading-none bg-gray-100 rounded"
          href="#"
          >Documentation</a
        >
      </div>
    </div>
    <div class="relative max-w-3xl mt-6 mb-8 mx-auto">
      <img src="images/elements/pattern-small.png" alt="" />
      <div class="absolute" style="top: 3%; left: 9%; width: 82%; height: 90%">
        <img
          class="object-contain w-full h-full"
          src="images/elements/app-mockup.png"
          alt=""
        />
      </div>
    </div>
    <div
      class="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-8 pb-12"
    >
      <div
        class="w-1/2 md:w-1/3 lg:w-1/5 px-3 mb-8"
        v-for="brand in context.header.brands"
      >
        <mk-image class="mx-auto" :src="brand.image" alt="" />
      </div>
    </div>
  </div>
  <home-features></home-features>
  <home-team></home-team>
</template>
<script>
export default {
  setup() {
    const context = useContext();
    // const {} = useGlobal()
    return {
      context
    };
  }
};
</script>
