<template>
  <section class="py-20">
    <div class="container px-4 mx-auto text-center">
      <div class="max-w-lg mx-auto mb-12">
        <span
          class="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl"
        >
          {{ team.label }}</span
        >
        <h2 class="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
          {{ team.title }}
        </h2>
        <p class="text-gray-400 leading-loose">
          {{ team.subtitle }}
        </p>
      </div>
      <div class="flex flex-wrap -mx-3">
        <div
          class="w-full md:w-1/2 lg:w-1/4 px-3 mb-12"
          v-for="member in team.members"
        >
          <img
            class="h-64 w-64 mx-auto rounded object-cover object-top"
            :src="member.image"
            alt=""
          />
          <p class="mt-6 text-xl">
            {{ member.fullname }}
          </p>
          <p class="mt-2 mb-4 text-blue-600">
            {{ member.position }}
          </p>
          <div class="flex py-1 justify-center space-x-2">
            <a v-for="social in member.social" :href="social.url">
              <mk-icon size="1.4" class="text-blue-600">
                {{ social.icon }}
              </mk-icon></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  setup() {
    const { team } = useContext();
    // const {} = useGlobal()
    return {
      team
    };
  }
};
</script>
