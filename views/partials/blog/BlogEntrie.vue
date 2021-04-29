<template>
  <section class="py-20">
    <div class="container px-4 mx-auto">
      <div class="max-w-2xl mx-auto">
        <div class="text-center mb-6">
          <span class="text-base md:text-lg">
            <a class="text-blue-500 hover:underline" href="#">
              {{ cms.category }} </a
            >&nbsp;
            <span class="text-blueGray-400">
              {{ cms.date }}
            </span>
          </span>
          <h2 class="text-4xl md:text-5xl mt-4 font-bold font-heading">
            {{ cms.title }}
          </h2>
        </div>
        <div class="flex justify-center mb-8">
          <img
            class="w-12 h-12 object-cover rounded-full"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60"
            alt=""
          />
          <div class="pl-4">
            <p class="text-blueGray-500 mb-1">Alice Bradley</p>
            <p class="text-xs text-blue-600 font-semibold">Author</p>
          </div>
        </div>
        <mk-content :document="cms" :class="'miclass'" />

        <div class="pt-8">
          <div class="flex justify-center pt-8 space-x-6">
            <div>
              <u v-if="context.prev">
                {{ '<' }}
                <mk-link :to="`blogs/${context.prev.slug}`">
                  {{ context.prev.title }}
                </mk-link>
              </u>
            </div>
            <div class="flex-auto"></div>
            <div>
              <u v-if="context.next">
                <mk-link :to="`blogs/${context.next.slug}`">
                  {{ context.next.title }} >
                </mk-link>
              </u>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- <section class="py-20">
    <div class="container px-4 mx-auto">
      <mk-content :document="context.cms" :class="'miclass'" />
    </div>
  </section> -->
</template>
<script>
export default {
  setup() {
    const context = useContext();

    return {
      cms: context.cms,
      context
    };
  }
};
</script>
